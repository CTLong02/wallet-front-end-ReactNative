import { useState } from 'react';
import {
    StyledView,
    StyledText,
    StyledTextInput,
    StyledTouchableWithoutFeedback,
    StyledTouchableOpacity,
} from '../../general/components/ComponentsApp';
import { Picker } from '@react-native-community/picker';
import moment from 'moment';
import AccountApi from '../../api/AccountApi';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import { useDispatch } from 'react-redux';
import { createCard } from '../../app/appSlice';
function CreateCard() {
    const account = useSelector((state) => state.app.account);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        bankname: 'ACBBank',
        // expireDate: '',
        numberOfCCard: '',
        expireMonth: '',
        expireYear: '',
    });
    const changeBankName = (newBankName) => {
        setForm({
            ...form,
            bankname: newBankName,
        });
    };
    const handleChangeForm = (name, value) => {
        setForm({
            ...form,
            [`${name}`]: value,
        });
    };
    const handleCreateCard = async () => {
        const res = await AccountApi.createCard({
            cardNumbers: form.numberOfCCard,
            bankName: form.bankname,
            expireDate: form.expireYear.concat(`-${form.expireMonth}`),
            userId: account?.id,
        });
        console.log('res', res);
        if (res.result === 'success') {
            dispatch(createCard(res.data));
            navigation.navigate(NavigationScreenNames.Wallet);
        }
    };
    return (
        <StyledView style={{ backgroundColor: '#176980' }} className="flex flex-col justify-center min-h-full">
            <StyledView className="px-5 py-3 mx-3 rounded-lg shadow-lg bg-white">
                <StyledView>
                    <StyledText className="text-lg ">Số thẻ:</StyledText>
                    <StyledTextInput
                        className="p-1 border-b-2 border-gray-300 border-solid"
                        onChangeText={(text) => handleChangeForm('numberOfCCard', text)}
                    ></StyledTextInput>
                </StyledView>
                <StyledView>
                    <StyledText className="text-lg ">Ngân hàng:</StyledText>
                    <Picker mode="dropdown" selectedValue={form.bankname} onValueChange={changeBankName}>
                        <Picker.Item label="ACBBank" value={'ACBBank'}></Picker.Item>
                        <Picker.Item label="VPBank" value={'VPBank'}></Picker.Item>
                        <Picker.Item label="TechcomBank" value={'TechcomBank'}></Picker.Item>
                    </Picker>
                </StyledView>
                <StyledView>
                    <StyledText className="text-lg">Ngày hết hạn:</StyledText>
                    <StyledView className="flex flex-row mt-2">
                        <StyledView className="flex flex-row items-center basis-1/2">
                            <StyledText className="inline-block text-lg">Tháng:</StyledText>
                            <StyledTextInput
                                className="ml-4 w-12 border-2 rounded-lg border-solid border-gray-700"
                                onChangeText={(text) => handleChangeForm('expireMonth', text)}
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView className="flex flex-row items-center basis-1/2">
                            <StyledText className="inline-block text-lg">Năm:</StyledText>
                            <StyledTextInput
                                className="ml-4 w-12 border-2 rounded-lg border-solid border-gray-700"
                                onChangeText={(text) => handleChangeForm('expireYear', text)}
                            ></StyledTextInput>
                        </StyledView>
                    </StyledView>
                </StyledView>
                <StyledTouchableOpacity onPress={handleCreateCard} delayPressIn={100}>
                    <StyledText className="mt-4 text-center py-2 text-lg font-semibold text-white bg-cyan-800 rounded-lg">
                        Thêm
                    </StyledText>
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    );
}

export default CreateCard;
