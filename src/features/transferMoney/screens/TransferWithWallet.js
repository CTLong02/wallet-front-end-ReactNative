import {
    StyledImage,
    StyledKeyboardAvoidingView,
    StyledText,
    StyledTextInput,
    StyledTouchableOpacity,
    StyledView,
} from '../../../general/components/ComponentsApp';
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ServiceApi from '../../../api/ServiceApi';
import { setReceiver } from '../../../app/appSlice';
function TransferByWallet() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleBack = () => {
        navigation.navigate({ name: NavigationScreenNames.Dashboard });
    };
    const [phoneNumbers, setPhoneNumbers] = useState('');
    const handleContinue = async () => {
        const responseByPhone = await ServiceApi.getNameByPhone({
            phoneNumbers,
        });
        // console.log('responseByPhone', responseByPhone);
        if (responseByPhone && responseByPhone.result === 'success') {
            navigation.navigate({ name: NavigationScreenNames.EnterMoney });
            dispatch(
                setReceiver({
                    name: responseByPhone.data.fullname,
                    id: responseByPhone.data.id,
                    phone: phoneNumbers,
                }),
            );
        }
    };
    return (
        <StyledView className="max-h-screen">
            <StyledView className="h-full flex flex-col justify-between">
                <StyledView>
                    <StyledView className="bg-cyan-800 rounded-b-xl pt-2 pb-10">
                        <StyledTouchableOpacity delayPressIn={100} onPress={handleBack}>
                            <StyledImage source={require('../../../assets/icon/left.png')}></StyledImage>
                        </StyledTouchableOpacity>
                    </StyledView>
                    <StyledView className="p-3 mx-4 bg-white relative bottom-6 rounded-lg">
                        <StyledTextInput
                            className="rounded-xl border-2 border-slate-400 border-solid px-3"
                            placeholder="Nhập số điện thoại"
                            onChangeText={(text) => setPhoneNumbers(text)}
                        ></StyledTextInput>
                    </StyledView>
                </StyledView>
                <StyledKeyboardAvoidingView>
                    <StyledTouchableOpacity onPress={handleContinue}>
                        <StyledText className="mx-12 my-4 py-2 text-center bg-cyan-800 rounded-xl shadow-lg text-white text-lg">
                            Tiếp tục
                        </StyledText>
                    </StyledTouchableOpacity>
                </StyledKeyboardAvoidingView>
            </StyledView>
        </StyledView>
    );
}

export default TransferByWallet;
