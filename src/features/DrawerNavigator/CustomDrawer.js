import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Text, View, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../app/appSlice';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import AppCofig from '../../general/contants/AppCofig';
import AuthApi from '../../api/AuthApi';
import styles from '../../general/Styles/AppStyles';
import Helper from '../../general/helper/Helper';

function CustomDrawer() {
    const account = useSelector((state) => state.app.account);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleSignOut = async () => {
        res = await AuthApi.signOut();
        if (res.result === 'success') {
            dispatch(signOut());
            navigation.navigate({ name: NavigationScreenNames.Login });
        }
    };
    const deviceHeight = useMemo(() => Helper.deviceHeight());
    return (
        <DrawerContentScrollView style={{ margin: 0, padding: 0, position: 'relative', top: -10 }}>
            <ScrollView>
                <View
                    style={[
                        styles.bgGreenMain,
                        styles.p3,
                        styles.flex,
                        styles.flexCol,
                        styles.hFull,
                        { height: deviceHeight },
                    ]}
                >
                    <View>
                        <View style={[styles.flex, styles.itemsCenter, styles.flexRow]}>
                            <View style={styles.mr3}>
                                <TouchableWithoutFeedback>
                                    <Image
                                        style={[styles.h12W12, styles.roundedFull]}
                                        source={
                                            account && account.avatar
                                                ? { uri: `${AppCofig.URL}${account.avatar}` }
                                                : require('../../assets/icon/user.png')
                                        }
                                    ></Image>
                                </TouchableWithoutFeedback>
                            </View>
                            <View>
                                <Text style={[styles.textSm, styles.textWhite, styles.fw500]}>{account?.fullname}</Text>
                                <Text style={[styles.textSm, styles.textWhite, styles.fw500]}>
                                    {account?.phoneNumbers}
                                </Text>
                            </View>
                        </View>
                        <TouchableWithoutFeedback>
                            <View style={[styles.my3, styles.flex, styles.flexRow, styles.itemsCenter]}>
                                <View
                                    style={[
                                        styles.containerCenter,
                                        styles.h12W12,
                                        styles.roundedMd,
                                        styles.mr3,
                                        { backgroundColor: '#83B8C1' },
                                    ]}
                                >
                                    <Image
                                        style={styles.h10W10}
                                        source={require('../../assets/icon/setting.png')}
                                    ></Image>
                                </View>
                                <View style={{ width: 144 }}>
                                    <Text style={[styles.textWhite, styles.textMd, styles.fw500]}>
                                        Cài đặt ứng dụng
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={[styles.my3, styles.flex, styles.flexRow, styles.itemsCenter]}>
                                <View
                                    style={[
                                        styles.containerCenter,
                                        styles.h12W12,
                                        styles.roundedMd,
                                        styles.mr3,
                                        { backgroundColor: '#83B8C1' },
                                    ]}
                                >
                                    <Image
                                        style={styles.h10W10}
                                        source={require('../../assets/icon/inforSoftware.png')}
                                    ></Image>
                                </View>
                                <View style={{ width: 144 }}>
                                    <Text style={[styles.textWhite, styles.textMd, styles.fw500]}>
                                        Thông tin phần mềm
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={[styles.my3, styles.flex, styles.flexRow, styles.itemsCenter]}>
                                <View
                                    style={[
                                        styles.containerCenter,
                                        styles.h12W12,
                                        styles.roundedMd,
                                        styles.mr3,
                                        { backgroundColor: '#83B8C1' },
                                    ]}
                                >
                                    <Image
                                        style={styles.h10W10}
                                        source={require('../../assets/icon/ruleAndAgree.png')}
                                    ></Image>
                                </View>
                                <View style={{ width: 144 }}>
                                    <Text style={[styles.textWhite, styles.textMd, styles.fw500]}>
                                        Các điều khoản và thỏa thuận
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={[styles.my3, styles.flex, styles.flexRow, styles.itemsCenter]}>
                                <View
                                    style={[
                                        styles.containerCenter,
                                        styles.h12W12,
                                        styles.roundedMd,
                                        styles.mr3,
                                        { backgroundColor: '#83B8C1' },
                                    ]}
                                >
                                    <Image style={styles.h10W10} source={require('../../assets/icon/help.png')}></Image>
                                </View>
                                <View style={{ width: 144 }}>
                                    <Text style={[styles.textWhite, styles.textMd, styles.fw500]}>
                                        Trung tâm trợ giúp
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ position: 'absolute', bottom: 72, left: 12, right: 12 }}>
                        <TouchableWithoutFeedback onPress={handleSignOut}>
                            <View style={[styles.bgWhite, styles.p2, styles.roundedLg]}>
                                <Text style={[styles.textCenter, styles.textGreenMain, styles.fw500, styles.textLg]}>
                                    Đăng xuất
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;
