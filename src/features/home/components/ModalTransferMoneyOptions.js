import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, Modal } from 'react-native';
import { useMemo } from 'react';
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
import { useNavigation } from '@react-navigation/native';
import Helper from '../../../general/helper/Helper';
import styles from '../../../general/Styles/AppStyles';
function ModalTransferMoneyOptions({ isModalTransferMoneyOptions, setIsModalTransferMoneyOptions }) {
    const navigation = useNavigation();
    const handleClose = () => {
        setIsModalTransferMoneyOptions(false);
    };
    const handleToPage = (page) => {
        setIsModalTransferMoneyOptions(false);
        navigation.navigate({ name: page });
    };
    const deviceHeight = useMemo(() => Helper.deviceHeight());
    return (
        <Modal
            onRequestClose={() => setIsModalTransferMoneyOptions(false)}
            transparent={true}
            visible={isModalTransferMoneyOptions}
        >
            <View
                style={[
                    styles.hFull,
                    styles.flex,
                    styles.flexCol,
                    styles.justifyEnd,
                    { backgroundColor: 'rgba(0,0,0,0.4)' },
                ]}
            >
                <TouchableWithoutFeedback onPress={handleClose}>
                    <View style={styles.flexGrow}></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.bgWhite, styles.p3]}>
                        <View style={[styles.flex, styles.flexRow, styles.justifyBetween, styles.px3]}>
                            <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_4]}>
                                <TouchableOpacity
                                    delayPressIn={100}
                                    onPress={() => handleToPage(`${NavigationScreenNames.TransferByWallet}`)}
                                >
                                    <Image source={require('../../../assets/icon/transferWallet.png')}></Image>
                                </TouchableOpacity>
                                <Text style={styles.textCenter}>Đến ví</Text>
                            </View>
                            <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_4]}>
                                <TouchableOpacity delayPressIn={100}>
                                    <Image source={require('../../../assets/icon/transferBank.png')}></Image>
                                </TouchableOpacity>
                                <Text style={styles.textCenter}>Đến ngân hàng</Text>
                            </View>
                            <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_4]}>
                                <TouchableOpacity delayPressIn={100}>
                                    <Image source={require('../../../assets/icon/transferCast.png')}></Image>
                                </TouchableOpacity>
                                <Text style={styles.textCenter}>Điểm đến nhận tiền mặt</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    );
}

export default ModalTransferMoneyOptions;
