import { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { handleMoneyToString } from '../../general/utils/handleString';
import Service from './components/Service';
import Promotion from './components/Promotion';
import ModalTransferMoneyOptions from './components/ModalTransferMoneyOptions';
import styles from '../../general/Styles/AppStyles';
import { useMemo } from 'react';
import Helper from '../../general/helper/Helper';

function Home() {
    const navigation = useNavigation();
    const account = useSelector((state) => state.app.account);
    const [moneyWithString, setMoneyWithString] = useState('');
    // console.log('account in home page', account);
    const openSlidebar = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    const [isModalTransferMoneyOptions, setIsModalTransferMoneyOptions] = useState(false);
    useEffect(() => {
        setMoneyWithString(handleMoneyToString(account?.remainMoney));
    }, [account]);
    const deviceHeight = useMemo(() => Helper.deviceHeight());
    const deviceWidth = useMemo(() => Helper.deviceWidth());
    return (
        <ScrollView style={{ maxHeight: deviceHeight - 80, overflow: 'scroll' }}>
            <View style={[styles.header, styles.bgGreenMain, styles.px3]}>
                <View style={[styles.flex, styles.flexRow, styles.justifyBetween]}>
                    <View>
                        <TouchableOpacity onPress={openSlidebar} delayPressIn={100}>
                            <View>
                                <Image source={require('../../assets/icon/menu.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.flex, styles.flexRow]}>
                        <TouchableOpacity delayPressIn={100}>
                            <View>
                                <Image source={require('../../assets/icon/search.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image source={require('../../assets/icon/notify.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.flex, styles.flexRow, styles.py3, styles.justifyBetween]}>
                    <View style={styles.basis1_5}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../assets/icon/takeInMoney.png')}></Image>
                        </View>
                        <Text style={[styles.fw500, styles.textWhite, styles.textSm, styles.mt3]}>Nạp tiền</Text>
                    </View>
                    <View style={styles.basis1_5}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../assets/icon/takeOutMoney.png')}></Image>
                        </View>
                        <Text style={[styles.fw500, styles.textWhite, styles.textSm, styles.mt3]}>Rút tiền</Text>
                    </View>
                    <View style={styles.basis1_5}>
                        <TouchableOpacity onPress={() => setIsModalTransferMoneyOptions(true)} delayPressIn={100}>
                            <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                                <Image
                                    style={styles.h10W10}
                                    source={require('../../assets/icon/achangeMoney.png')}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.fw500, styles.textWhite, styles.textSm, styles.mt3]}>Chuyển tiền</Text>
                    </View>
                    <View style={styles.basis1_5}>
                        <View style={[styles.h14W14, styles.containerCenter, styles.bgGreen, styles.roundedMd]}>
                            <Image style={styles.h10W10} source={require('../../assets/icon/QR.png')}></Image>
                        </View>
                        <Text style={[styles.fw500, styles.textWhite, styles.textSm, styles.mt3]}>Mã QR</Text>
                    </View>
                </View>
            </View>
            <View
                style={[
                    styles.shawDowLg,
                    styles.mx3,
                    styles.bgWhite,
                    styles.roundedSm,
                    styles.p3,
                    { transform: [{ translateY: -50 }] },
                ]}
            >
                <View style={[styles.flex, styles.flexRow, styles.itemsCenter, styles.justifyBetween, styles.mx3]}>
                    <View>
                        <Text style={[styles.textYellow, styles.fw500, styles.textMd]}>Tài khoản chính</Text>
                        <Text style={[styles.textGreenMain, styles.fw500, styles.textLg]}>{moneyWithString} VND</Text>
                    </View>
                    <View>
                        <TouchableOpacity delayPressIn={100}>
                            <View style={[styles.containerCenter, styles.h10W10, styles.bgGreen, styles.roundedMd]}>
                                <Image source={require('../../assets/icon/more.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.px3}>
                <Service setIsModalTransferMoneyOptions={setIsModalTransferMoneyOptions}></Service>
            </View>
            <ScrollView horizontal style={[styles.mx3, styles.mt3, { maxWidth: deviceWidth }]}>
                <View style={[styles.mr3]}>
                    <Image
                        style={{ width: 300, height: 200, resizeMode: 'cover' }}
                        source={require('../../assets/img/img_toast.png')}
                    ></Image>
                    <View style={[styles.roundedBottomXl, styles.bgWhite, styles.p3, { width: 300 }]}></View>
                </View>
                <View style={[styles.mr3]}>
                    <Image
                        style={{ width: 300, height: 200, resizeMode: 'cover' }}
                        source={require('../../assets/img/img_toast.png')}
                    ></Image>
                    <View style={[styles.roundedBottomXl, styles.bgWhite, styles.p3, { width: 300 }]}></View>
                </View>
                <View style={[styles.mr3]}>
                    <Image
                        style={{ width: 300, height: 200, resizeMode: 'cover' }}
                        source={require('../../assets/img/img_toast.png')}
                    ></Image>
                    <View style={[styles.roundedBottomXl, styles.bgWhite, styles.p3, { width: 300 }]}></View>
                </View>
            </ScrollView>
            <View style={[styles.px3, styles.mt3]}>
                <Promotion></Promotion>
            </View>
            {isModalTransferMoneyOptions ? (
                <ModalTransferMoneyOptions
                    isModalTransferMoneyOptions={isModalTransferMoneyOptions}
                    setIsModalTransferMoneyOptions={setIsModalTransferMoneyOptions}
                ></ModalTransferMoneyOptions>
            ) : (
                <></>
            )}
        </ScrollView>
    );
}

export default Home;
