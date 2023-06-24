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
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ServiceApi from '../../../api/ServiceApi';
import { setReceiver } from '../../../app/appSlice';
import styles from '../../../general/Styles/AppStyles';
import Helper from '../../../general/helper/Helper';
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
    const deviceHeight = Helper.deviceHeight();
    return (
        <View style={{ maxHeight: deviceHeight }}>
            <View style={[styles.hFull, styles.flex, styles.flexCol, styles.justifyBetween]}>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity delayPressIn={100} onPress={handleBack}>
                            <Image source={require('../../../assets/icon/left.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[
                            styles.mx3,
                            styles.p3,
                            styles.bgWhite,
                            styles.shawDowLg,
                            ,
                            styles.roundedMd,
                            { position: 'relative', bottom: '15%' },
                        ]}
                    >
                        <TextInput
                            style={[styles.px3, styles.roundedMd, styles.border, styles.textMd]}
                            placeholder="Nhập số điện thoại"
                            keyboardType="number-pad"
                            onChangeText={(text) => setPhoneNumbers(text)}
                        ></TextInput>
                    </View>
                </View>
                <KeyboardAvoidingView>
                    <TouchableOpacity onPress={handleContinue}>
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
                            Tiếp tục
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}

export default TransferByWallet;
