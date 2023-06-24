import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { handleMoneyToString } from '../../../general/utils/handleString';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
import styles from '../../../general/Styles/AppStyles';
function FinishAfterTransferMoney() {
    const navigation = useNavigation();
    const transaction = useSelector((state) => state.app.transactionInfor);
    const [sMoney, setSMoney] = useState('');
    const [sDate, setSDate] = useState('');
    useEffect(() => {
        if (transaction) {
            setSMoney(handleMoneyToString(transaction.money));
            setSDate(new Date(transaction.time).toLocaleString('vn'));
        }
    }, [transaction]);
    console.log(transaction);
    return (
        <View style={[styles.flex, styles.flexCol, styles.hFull, styles.justifyBetween]}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/icon/left.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View
                    style={[
                        styles.bgWhite,
                        styles.shawDowLg,
                        styles.roundedMd,
                        styles.mx3,
                        styles.p3,
                        { position: 'relative', bottom: '15%' },
                    ]}
                >
                    <Text style={[styles.textCenter, styles.fw600, styles.textLg, styles.textBlack]}>
                        Giao dịch thành công
                    </Text>
                    <Text style={[styles.textCenter, styles.fw600, styles.textLg, styles.textBlack]}>{sMoney}</Text>
                    <View style={[styles.flexRow, styles.justifyBetween, styles.my3]}>
                        <Text style={styles.textMd}>Thời gian thanh toán </Text>
                        <Text style={[styles.textMd, styles.textBlack, styles.fw500]}>{sDate}</Text>
                    </View>
                    <View style={[styles.flexRow, styles.justifyBetween, styles.my3]}>
                        <Text style={styles.textMd}>Mã giao dịch</Text>
                        <Text style={[styles.textMd, styles.textBlack, styles.fw500]}>821736483</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.flexRow, styles.justifyAround, styles.py3, styles.bgWhite]}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate({ name: NavigationScreenNames.Dashboard })}>
                        <Text
                            style={[
                                styles.border,
                                styles.textGreenMain,
                                styles.roundedMd,
                                styles.textLg,
                                styles.fw5,
                                styles.p3,
                                { borderColor: '#2C8A9B' },
                            ]}
                        >
                            Về trang chủ
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate({ name: NavigationScreenNames.TransferByWallet })}
                    >
                        <Text
                            style={[
                                styles.textWhite,
                                styles.roundedMd,
                                styles.textLg,
                                styles.fw5,
                                styles.p3,
                                styles.bgGreenMain,
                            ]}
                        >
                            Chuyển tiền tiếp
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default FinishAfterTransferMoney;
