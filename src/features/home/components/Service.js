import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import styles from '../../../general/Styles/AppStyles';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
function Service() {
    const navigation = useNavigation();
    return (
        <View style={[styles.bgWhite, styles.roundedLg, styles.shawDowLg, styles.p3]}>
            <Text style={[styles.textGreenMain, styles.fw600, styles.textLg]}>Dịch vụ</Text>
            <View style={[styles.flex, styles.flexRow, styles.justifyBetween, styles.mt3, styles.flexWrap]}>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image
                                style={styles.h10W10}
                                source={require('../../../assets/icon/transferMoney.png')}
                            ></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>Chuyển nhận tiền</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate({ name: NavigationScreenNames.Invoice })}>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../../assets/icon/payBills.png')}></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>
                            Thanh toán hóa đơn
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../../assets/icon/mobile.png')}></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>
                            Nạp tiền điện thoại
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../../assets/icon/cart.png')}></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>
                            Thương mại điện tử
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image
                                style={styles.h10W10}
                                source={require('../../../assets/icon/cardTravel.png')}
                            ></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>Nạp tiền đối tác</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../../assets/icon/insurance.png')}></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>
                            Tài chính bảo hiểm
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../../assets/icon/borrow.png')}></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>Vay tín dụng</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../../assets/icon/pig.png')}></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>Tiết kiệm</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image
                                style={styles.h10W10}
                                source={require('../../../assets/icon/entertainment.png')}
                            ></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>Giải trí</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.flex, styles.flexCol, styles.itemsCenter, styles.basis1_5]}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../../assets/icon/heart.png')}></Image>
                        </View>
                        <Text style={[styles.textSx, styles.fw500, styles.textCenter, styles.p]}>Đặt hẹn hò</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

export default Service;
