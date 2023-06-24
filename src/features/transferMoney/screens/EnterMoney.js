import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
    Modal,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
import { useState } from 'react';
import { handleMoneyToString, handleStringToMoney } from '../../../general/utils/handleString';
import ServiceApi from '../../../api/ServiceApi';
import Toasts from '../../../app/components/Toasts';
import { useDispatch } from 'react-redux';
import { setAccountNew, setTransactionInfor } from '../../../app/appSlice';
import { useMemo } from 'react';
import Helper from '../../../general/helper/Helper';
import styles from '../../../general/Styles/AppStyles';
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
            dispatch(
                setTransactionInfor({
                    ...newForm,
                }),
            );
            Toasts.showSuccess(`Bạn đã chuyển khoản ${receiverName} thành công`);
            navigation.navigate({ name: NavigationScreenNames.Finish });
        }
    };
    const deviceHeight = useMemo(() => Helper.deviceHeight());
    return (
        <View style={{ maxHeight: deviceHeight }}>
            <View style={[styles.hFull, styles.flex, styles.flexCol, styles.justifyBetween]}>
                <View>
                    <View style={[styles.bgGreenMain, styles.roundedBottomXl]}>
                        <View>
                            <TouchableOpacity
                                delayPressIn={300}
                                onPress={() => navigation.navigate({ name: NavigationScreenNames.TransferByWallet })}
                            >
                                <Image source={require('../../../assets/icon/left.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerCenter}>
                            <View style={[styles.border, styles.p2, styles.roundedFull]}>
                                <Image style={styles.h28w28} source={require('../../../assets/icon/user.png')}></Image>
                            </View>
                        </View>
                        <View style={[styles.mt3, styles.py3]}>
                            <Text style={[styles.textLg, styles.textWhite, styles.fw500, styles.textCenter]}>
                                {receiverName}
                            </Text>
                            <Text style={[styles.textMd, styles.textWhite, styles.fw500, styles.textCenter]}>
                                {receiverPhone}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.px3, styles.mt3]}>
                        <View
                            style={[
                                styles.border,
                                styles.flex,
                                styles.flexRow,
                                styles.itemsCenter,
                                styles.roundedMd,
                                styles.p2,
                            ]}
                        >
                            <TextInput
                                style={[styles.flexGrow, styles.textCenter, styles.textLg]}
                                onChangeText={(text) => handleMoney(text)}
                                value={form.money}
                                keyboardType="number-pad"
                            ></TextInput>
                            <Text style={[styles.textLg, styles.textGreenMain]}>VND</Text>
                        </View>
                        <View style={[styles.border, styles.roundedMd, styles.mt3, styles.p3]}>
                            <Text style={[styles.fw500, styles.textMd, styles.textGreenMain]}>Lời nhắn :</Text>
                            <TextInput onChangeText={(text) => handleMessage(text)} value={form.message}></TextInput>
                        </View>
                    </View>
                </View>
                <View>
                    <KeyboardAvoidingView>
                        <TouchableOpacity onPress={handleTransferMoney}>
                            <Text
                                style={[
                                    styles.shawDowLg,
                                    styles.p2,
                                    styles.bgGreenMain,
                                    styles.textCenter,
                                    styles.textWhite,
                                    styles.textLg,
                                    styles.fw600,
                                    styles.roundedLg,
                                    { marginHorizontal: 40 },
                                ]}
                            >
                                Chuyển Tiền
                            </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </View>
    );
}

export default EnterMoney;
