import { View, Text, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from '../../general/Styles/AppStyles';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';

function Invoice() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={[styles.header, styles.flexRow, styles.itemsCenter]}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate({ name: NavigationScreenNames.Dashboard })}
                >
                    <Image source={require('../../assets/icon/left.png')}></Image>
                </TouchableWithoutFeedback>
                <View style={styles.flexGrow}>
                    <Text style={[styles.title]}>Thanh toán hóa đơn</Text>
                </View>
            </View>
            <View
                style={[
                    styles.bgWhite,
                    styles.shawDowLg,
                    styles.p3,
                    styles.mx3,
                    styles.roundedMd,
                    { position: 'relative', bottom: 20 },
                ]}
            >
                <View>
                    <View style={[styles.roundedMd, styles.p, styles.bgGreen, styles.flexRow, styles.itemsCenter]}>
                        <Image source={require('../../assets/icon/icSearch.png')}></Image>
                        <TextInput style={[styles.textSx]} placeholder="Nhập mã hóa đơn"></TextInput>
                    </View>
                    <View style={[styles.mt3]}>
                        <Text style={[styles.textGreenMain, styles.fw500]}>Mã hóa đơn đã lưu</Text>
                        <View
                            style={[
                                styles.flexRow,
                                styles.justifyBetween,
                                styles.my3,
                                styles.p2,
                                styles.roundedSm,
                                styles.shawDowLg,
                                { backgroundColor: '#E7F1F2' },
                            ]}
                        >
                            <View style={[styles.flexRow]}>
                                <Image source={require('../../assets/icon/network.png')}></Image>
                                <View style={styles.ml3}>
                                    <Text style={[styles.textBlack, styles.fw500]}>FPT telecom</Text>
                                    <Text>SG7821442</Text>
                                </View>
                            </View>
                            <View style={[styles.flexRow, styles.itemsCenter]}>
                                <Image source={require('../../assets/icon/tick.png')}></Image>
                                <Text style={[styles.ml3]}>Đã thanh toán</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.mt3}>
                    <Text style={[styles.textGreenMain, styles.fw500]}>Danh mục dịch vụ</Text>
                    <View style={[styles.flexRow, styles.flexWrap, styles.mt3, styles.justifyBetween]}>
                        <View
                            style={[
                                styles.basis48,
                                styles.flexRow,
                                styles.p3,
                                styles.bgWhite,
                                styles.shawDowLg,
                                styles.roundedMd,
                                styles.itemsCenter,
                                styles.mt3,
                            ]}
                        >
                            <Image source={require('../../assets/icon/electric.png')}></Image>
                            <Text style={[styles.fw500, styles.textBlack, { flexBasis: '70%' }]}>
                                Thanh toán tiền điện
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.basis48,
                                styles.flexRow,
                                styles.p3,
                                styles.bgWhite,
                                styles.shawDowLg,
                                styles.roundedMd,
                                styles.itemsCenter,
                                styles.mt3,
                            ]}
                        >
                            <Image source={require('../../assets/icon/water.png')}></Image>
                            <Text style={[styles.fw500, styles.textBlack, { flexBasis: '70%' }]}>
                                Thanh toán tiền nước
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.basis48,
                                styles.flexRow,
                                styles.p3,
                                styles.bgWhite,
                                styles.shawDowLg,
                                styles.roundedMd,
                                styles.itemsCenter,
                                styles.mt3,
                            ]}
                        >
                            <Image source={require('../../assets/icon/network.png')}></Image>
                            <Text style={[styles.fw500, styles.textBlack, { flexBasis: '70%' }]}>
                                Thanh toán tiền internet
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.basis48,
                                styles.flexRow,
                                styles.p3,
                                styles.bgWhite,
                                styles.shawDowLg,
                                styles.roundedMd,
                                styles.itemsCenter,
                                styles.mt3,
                            ]}
                        >
                            <Image source={require('../../assets/icon/phone.png')}></Image>
                            <Text style={[styles.fw500, styles.textBlack, { flexBasis: '70%' }]}>
                                Thanh toán trả sau
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mt3}>
                    <Text style={[styles.textGreenMain, styles.fw500]}>Danh mục dịch vụ</Text>
                    <View style={[styles.flexRow, styles.flexWrap, styles.mt3]}>
                        <View style={[styles.basis1_5, styles.flexCol, styles.itemsCenter, styles.mt3]}>
                            <View style={[styles.bgGreen, styles.h12W12, styles.containerCenter, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/electric.png')}></Image>
                            </View>
                            <Text style={[styles.textSx, styles.textBlack]}>Điện</Text>
                        </View>
                        <View style={[styles.basis1_5, styles.flexCol, styles.itemsCenter, styles.mt3]}>
                            <View style={[styles.bgGreen, styles.h12W12, styles.containerCenter, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/water.png')}></Image>
                            </View>
                            <Text style={[styles.textSx, styles.textBlack]}>Nước</Text>
                        </View>
                        <View style={[styles.basis1_5, styles.flexCol, styles.itemsCenter, styles.mt3]}>
                            <View style={[styles.bgGreen, styles.h12W12, styles.containerCenter, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/network.png')}></Image>
                            </View>
                            <Text style={[styles.textSx, styles.textBlack]}>Internet</Text>
                        </View>
                        <View style={[styles.basis1_5, styles.flexCol, styles.itemsCenter, styles.mt3]}>
                            <View style={[styles.bgGreen, styles.h12W12, styles.containerCenter, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/tv.png')}></Image>
                            </View>
                            <Text style={[styles.textSx, styles.textBlack]}>Truyền hình</Text>
                        </View>
                        <View style={[styles.basis1_5, styles.flexCol, styles.itemsCenter, styles.mt3]}>
                            <View style={[styles.bgGreen, styles.h12W12, styles.containerCenter, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/phone.png')}></Image>
                            </View>
                            <Text style={[styles.textSx, styles.textBlack]}>Điện thoại cố định</Text>
                        </View>
                        <View style={[styles.basis1_5, styles.flexCol, styles.itemsCenter, styles.mt3]}>
                            <View style={[styles.bgGreen, styles.h12W12, styles.containerCenter, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/fee.png')}></Image>
                            </View>
                            <Text style={[styles.textSx, styles.textBlack]}>Học phí</Text>
                        </View>
                        <View style={[styles.basis1_5, styles.flexCol, styles.itemsCenter, styles.mt3]}>
                            <View style={[styles.bgGreen, styles.h12W12, styles.containerCenter, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/icInsurance.png')}></Image>
                            </View>
                            <Text style={[styles.textSx, styles.textBlack]}>Bảo hiểm</Text>
                        </View>
                        <View style={[styles.basis1_5, styles.flexCol, styles.itemsCenter, styles.mt3]}>
                            <View style={[styles.bgGreen, styles.h12W12, styles.containerCenter, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/list.png')}></Image>
                            </View>
                            <Text style={[styles.textSx, styles.textBlack]}>Hóa đơn khác</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Invoice;
