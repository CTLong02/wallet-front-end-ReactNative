import {
    StyledView,
    StyledText,
    StyledImage,
    StyledTouchableOpacity,
    StyledTextInput,
    StyledKeyboardAvoidingView,
} from '../../../general/components/ComponentsApp';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
import { useState } from 'react';
import { handleMoneyToString, handleStringToMoney } from '../../../general/utils/handleString';
import ServiceApi from '../../../api/ServiceApi';
import Toasts from '../../../app/components/Toasts';
import { useDispatch } from 'react-redux';
import { setAccountNew, setTransactionInfor } from '../../../app/appSlice';
function EnterMoney() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.app.account);
    const receiverName = useSelector((state) => state.app.receiverName);
    const receiverId = useSelector((state) => state.app.receiverId);
    const receiverPhone = useSelector((state) => state.app.receiverPhone);
    const [form, setForm] = useState({
        money: '',
        message: '...',
        time: '',
        transactionType: 'wallet',
    });
    const handleMoney = (text) => {
        const moneyNew = handleMoneyToString(handleStringToMoney(text));
        setForm({
            ...form,
            money: moneyNew,
        });
    };
    const handleMessage = (text) => {
        setForm({
            ...form,
            message: text,
        });
    };
    // console.log(account);
    const handleTransferMoney = async () => {
        const newForm = {
            ...form,
            receiverId,
            senderId: account?.id,
            time: new Date(Date.now()).toJSON(),
            money: handleStringToMoney(form.money),
        };
        // console.log(newForm);
        const res = await ServiceApi.transferMoney(newForm);
        if (res && res.result === 'success') {
            dispatch(setAccountNew(res.data));
            dispatch(setTransactionInfor(newForm));
            Toasts.showSuccess(`Bạn đã chuyển khoản ${receiverName} thành công`);
            navigation.navigate({ name: NavigationScreenNames.Finish });
        }
    };
    // console.log(receiverName, receiverId, receiverPhone, account.id);
    return (
        <StyledView className="max-h-screen">
            <StyledView className="h-full flex flex-col justify-between">
                <StyledView>
                    <StyledView className="bg-cyan-800 rounded-b-xl">
                        <StyledView>
                            <StyledTouchableOpacity
                                delayPressIn={300}
                                onPress={() => navigation.navigate({ name: NavigationScreenNames.TransferByWallet })}
                            >
                                <StyledImage source={require('../../../assets/icon/left.png')}></StyledImage>
                            </StyledTouchableOpacity>
                        </StyledView>
                        <StyledView className="flex flex-row justify-center">
                            <StyledView className="border-2 border-solid border-white rounded-full p-2">
                                <StyledImage
                                    className="w-28 h-28"
                                    source={require('../../../assets/icon/user.png')}
                                ></StyledImage>
                            </StyledView>
                        </StyledView>
                        <StyledView className="mt-3 py-2">
                            <StyledText className="text-lg text-white text-center font-semibold">
                                {receiverName}
                            </StyledText>
                            <StyledText className="text-lg text-white text-center font-semibold">
                                {receiverPhone}
                            </StyledText>
                        </StyledView>
                    </StyledView>
                    <StyledView className="mt-3 px-3">
                        <StyledView className="border-2 border-solid border-slate-200 rounded-lg flex flex-row items-center px-3 py-2">
                            <StyledTextInput
                                className="flex-grow text-center text-lg"
                                onChangeText={(text) => handleMoney(text)}
                                value={form.money}
                                keyboardType="number-pad"
                            ></StyledTextInput>
                            <StyledText className="text-lg  text-cyan-600">VND</StyledText>
                        </StyledView>
                        <StyledView className="border-2 border-solid border-slate-300 mt-3 rounded-lg px-3 py-2">
                            <StyledText className="font-semibold text-lg text-cyan-800">Lời nhắn</StyledText>
                            <StyledTextInput
                                onChangeText={(text) => handleMessage(text)}
                                value={form.message}
                            ></StyledTextInput>
                        </StyledView>
                    </StyledView>
                </StyledView>
                <StyledView>
                    <StyledKeyboardAvoidingView>
                        <StyledTouchableOpacity onPress={handleTransferMoney}>
                            <StyledText className="mx-12 my-4 py-2 text-center bg-cyan-800 rounded-xl shadow-lg text-white text-lg">
                                Chuyển Tiền
                            </StyledText>
                        </StyledTouchableOpacity>
                    </StyledKeyboardAvoidingView>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}

export default EnterMoney;
