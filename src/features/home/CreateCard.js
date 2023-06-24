import { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-community/picker';
import AccountApi from '../../api/AccountApi';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import { useDispatch } from 'react-redux';
import { createCard } from '../../app/appSlice';
import Toasts from '../../app/components/Toasts';
import styles from '../../general/Styles/AppStyles';
function CreateCard() {
    const account = useSelector((state) => state.app.account);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        bankname: 'ACBBank',
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
        if (res.result === 'success') {
            Toasts.showSuccess(`Bạn đã liên kết thẻ ${res.data[account.cards.length].bankName} thành công!`);
            dispatch(createCard(res.data));
            navigation.navigate(NavigationScreenNames.Wallet);
        }
    };
    return (
        <SafeAreaView>
            <View style={[styles.p3, styles.bgGreenMain, styles.roundedBottomXl]}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate({ name: NavigationScreenNames.Wallet })}>
                    <Image source={require('../../assets/icon/left.png')}></Image>
                </TouchableWithoutFeedback>
            </View>
            <View style={[styles.flexCol, styles.hFull, styles.mt3]}>
                <View style={[styles.p3, styles.mx3, styles.bgWhite, styles.shawDowLg, styles.roundedMd]}>
                    <View>
                        <Text style={[styles.textMd, styles.fw500]}>Số thẻ:</Text>
                        <TextInput
                            style={styles.borderB}
                            onChangeText={(text) => handleChangeForm('numberOfCCard', text)}
                        ></TextInput>
                    </View>
                    <View>
                        <Text style={[styles.textMd, styles.fw500]}>Ngân hàng:</Text>
                        <Picker mode="dropdown" selectedValue={form.bankname} onValueChange={changeBankName}>
                            <Picker.Item label="ACBBank" value={'ACBBank'}></Picker.Item>
                            <Picker.Item label="VPBank" value={'VPBank'}></Picker.Item>
                            <Picker.Item label="TechcomBank" value={'TechcomBank'}></Picker.Item>
                        </Picker>
                    </View>
                    <View>
                        <Text style={[styles.textMd, styles.fw500]}>Ngày hết hạn:</Text>
                        <View style={[styles.flexRow, styles.mt3]}>
                            <View style={[styles.flexRow, styles.itemsCenter, styles.basis1_2]}>
                                <Text style={[styles.textMd, styles.fw500, styles.mr3]}>Tháng:</Text>
                                <TextInput
                                    style={[styles.border, styles.roundedMd, styles.h12W12, styles.textCenter]}
                                    onChangeText={(text) => handleChangeForm('expireMonth', text)}
                                ></TextInput>
                            </View>
                            <View style={[styles.flexRow, styles.itemsCenter, styles.basis1_2]}>
                                <Text style={[styles.textMd, styles.fw500, styles.mr3]}>Năm:</Text>
                                <TextInput
                                    style={[styles.border, styles.roundedMd, styles.h12W12, styles.textCenter]}
                                    onChangeText={(text) => handleChangeForm('expireYear', text)}
                                ></TextInput>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleCreateCard} delayPressIn={100} style={styles.mt3}>
                        <Text
                            style={[
                                styles.shawDowLg,
                                styles.p2,
                                styles.bgGreenMain,
                                styles.textCenter,
                                styles.textWhite,
                                styles.textLg,
                                styles.fw600,
                                styles.roundedMd,
                                styles.mt3,
                            ]}
                        >
                            Thêm
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default CreateCard;
