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
import ServiceApi from '../../api/ServiceApi';
import { useState, useEffect } from 'react';
import { handleMoneyToString } from '../../general/utils/handleString';
import styles from '../../general/Styles/AppStyles';
function History() {
    const [transactions, setTransactions] = useState([]);
    const [typeOfTransaction, setTypeOfTransaction] = useState('all');
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        ServiceApi.getHistory({
            typeOfTransaction,
            offset,
        })
            .then((res) => {
                setTransactions([...res.data]);
            })
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        ServiceApi.getHistory({
            typeOfTransaction,
            offset,
        })
            .then((res) => {
                setTransactions([...res.data]);
            })
            .catch((err) => console.log(err));
    }, [typeOfTransaction]);
    return (
        <SafeAreaView>
            <View style={[styles.header, styles.flexRow, styles.itemsCenter]}>
                <View>
                    <Image source={require('../../assets/icon/menu.png')}></Image>
                </View>
                <View style={[styles.flexGrow]}>
                    <Text style={styles.title}>Lịch sử giao dịch</Text>
                </View>
            </View>
            <View
                style={[
                    styles.roundedMd,
                    styles.shawDowLg,
                    styles.bgWhite,
                    styles.mx3,
                    styles.p3,
                    { position: 'relative', bottom: 20 },
                ]}
            >
                <View style={[styles.flexRow, styles.justifyAround]}>
                    <View>
                        <TouchableWithoutFeedback onPress={() => setTypeOfTransaction('all')}>
                            <Text
                                style={[
                                    styles.fw500,
                                    styles.p2,
                                    styles.border,
                                    styles.roundedMd,
                                    { borderColor: typeOfTransaction === 'all' ? '#196371' : '#7D7D7D' },
                                ]}
                            >
                                Tất cả
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={() => setTypeOfTransaction('receiver')}>
                            <Text
                                style={[
                                    styles.fw500,
                                    styles.p2,
                                    styles.border,
                                    styles.roundedMd,
                                    { borderColor: typeOfTransaction === 'receiver' ? '#196371' : '#7D7D7D' },
                                ]}
                            >
                                Nhận tiền
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={() => setTypeOfTransaction('sender')}>
                            <Text
                                style={[
                                    styles.fw500,
                                    styles.p2,
                                    styles.border,
                                    styles.roundedMd,
                                    { borderColor: typeOfTransaction === 'sender' ? '#196371' : '#7D7D7D' },
                                ]}
                            >
                                chuyển tiền
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <ScrollView style={{ maxHeight: 500 }}>
                    {transactions.length > 0 ? (
                        transactions.map((transaction, index) => {
                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.bgGreen,
                                        styles.roundedMd,
                                        styles.p3,
                                        styles.mt3,
                                        styles.flexRow,
                                        styles.itemsCenter,
                                    ]}
                                >
                                    <View style={{ flexBasis: '15%' }}>
                                        <Image
                                            style={[styles.h10W10]}
                                            source={
                                                transaction?.transactionType
                                                    ? require('../../assets/icon/iconTransfer.png')
                                                    : require('../../assets/icon/iconTransferByBank.png')
                                            }
                                        ></Image>
                                    </View>
                                    <View style={{ flexBasis: '60%' }}>
                                        <Text style={[styles.textSx, styles.fw500, styles.textBlack]}>
                                            {transaction?.receiver
                                                ? `Chuyển tiền đến ${transaction.receiver.fullname}`
                                                : `Nhận tiền từ ${transaction.sender.fullname}`}
                                        </Text>
                                        <Text style={[styles.textBlack, styles.textSx]}>
                                            {'Tin nhắn : '}
                                            {transaction.message ? transaction.message : ''}
                                        </Text>
                                    </View>
                                    <View style={{ flexBasis: '25%' }}>
                                        <Text style={[styles.textRight, styles.fw500, styles.textBlack]}>
                                            {transaction?.receiver ? '-' : '+'}
                                            {transaction?.money ? handleMoneyToString(transaction.money) : ''}
                                        </Text>
                                    </View>
                                </View>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default History;
