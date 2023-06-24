import { View, Text, Image, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../../general/Styles/AppStyles';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import { useMemo } from 'react';
import Helper from '../../general/helper/Helper';
function RechargeMobile() {
    const navigation = useNavigation();
    const deviceHeight = useMemo(() => Helper.deviceHeight());
    return (
        <View style={{ maxHeight: deviceHeight }}>
            <View style={[styles.flexCol, styles.justifyBetween, styles.hFull]}>
                <View>
                    <View style={[styles.header, styles.flexRow, styles.itemsCenter]}>
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate({ name: NavigationScreenNames.Dashboard })}
                        >
                            <Image source={require('../../assets/icon/left.png')}></Image>
                        </TouchableWithoutFeedback>
                        <Text style={[styles.title, styles.flexGrow]}>Nạp tiền điện thoại</Text>
                    </View>
                    <View
                        style={[
                            styles.mt3,
                            styles.p3,
                            styles.mx3,
                            styles.roundedMd,
                            styles.flexRow,
                            styles.itemsCenter,
                        ]}
                    >
                        <View
                            style={[
                                styles.bgWhite,
                                styles.shawDowLg,
                                styles.roundedMd,
                                styles.containerCenter,
                                styles.h14W14,
                            ]}
                        >
                            <Image
                                style={[styles.h10W10, { resizeMode: 'contain' }]}
                                source={require('../../assets/icon/viettel.png')}
                            ></Image>
                        </View>
                        <View
                            style={[
                                styles.flexRow,
                                styles.itemsCenter,
                                styles.flexGrow,
                                styles.justifyBetween,
                                styles.bgWhite,
                                styles.shawDowLg,
                                styles.roundedMd,
                                styles.p,
                                styles.ml3,
                            ]}
                        >
                            <TextInput keyboardType="number-pad" autoFocus></TextInput>
                            <Image
                                style={{ height: 32, width: 32 }}
                                source={require('../../assets/icon/directory.png')}
                            ></Image>
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.flexWrap, styles.mx3]}>
                        <Text
                            style={[
                                { width: 100 },
                                styles.py3,
                                styles.textCenter,
                                styles.bgWhite,
                                styles.roundedMd,
                                styles.shawDowLg,
                                styles.textLg,
                                styles.textBlack,
                                styles.mr3,
                                styles.mt3,
                            ]}
                        >
                            10.000
                        </Text>
                        <Text
                            style={[
                                { width: 100 },
                                styles.py3,
                                styles.textCenter,
                                styles.bgWhite,
                                styles.roundedMd,
                                styles.shawDowLg,
                                styles.textLg,
                                styles.textBlack,
                                styles.mr3,
                                styles.mt3,
                            ]}
                        >
                            20.000
                        </Text>
                        <Text
                            style={[
                                { width: 100 },
                                styles.py3,
                                styles.textCenter,
                                styles.bgWhite,
                                styles.roundedMd,
                                styles.shawDowLg,
                                styles.textLg,
                                styles.textBlack,
                                styles.mr3,
                                styles.mt3,
                            ]}
                        >
                            30.000
                        </Text>
                        <Text
                            style={[
                                { width: 100 },
                                styles.py3,
                                styles.textCenter,
                                styles.bgWhite,
                                styles.roundedMd,
                                styles.shawDowLg,
                                styles.textLg,
                                styles.textBlack,
                                styles.mr3,
                                styles.mt3,
                            ]}
                        >
                            50.000
                        </Text>
                        <Text
                            style={[
                                { width: 100 },
                                styles.py3,
                                styles.textCenter,
                                styles.bgWhite,
                                styles.roundedMd,
                                styles.shawDowLg,
                                styles.textLg,
                                styles.textBlack,
                                styles.mr3,
                                styles.mt3,
                            ]}
                        >
                            100.000
                        </Text>
                        <Text
                            style={[
                                { width: 100 },
                                styles.py3,
                                styles.textCenter,
                                styles.bgWhite,
                                styles.roundedMd,
                                styles.shawDowLg,
                                styles.textLg,
                                styles.textBlack,
                                styles.mr3,
                                styles.mt3,
                            ]}
                        >
                            200.000
                        </Text>
                        <Text
                            style={[
                                { width: 100 },
                                styles.py3,
                                styles.textCenter,
                                styles.bgWhite,
                                styles.roundedMd,
                                styles.shawDowLg,
                                styles.textLg,
                                styles.textBlack,
                                styles.mr3,
                                styles.mt3,
                            ]}
                        >
                            300.000
                        </Text>
                        <Text
                            style={[
                                { width: 100 },
                                styles.py3,
                                styles.textCenter,
                                styles.bgWhite,
                                styles.roundedMd,
                                styles.shawDowLg,
                                styles.textLg,
                                styles.textBlack,
                                styles.mr3,
                                styles.mt3,
                            ]}
                        >
                            500.000
                        </Text>
                    </View>
                </View>
                <View>
                    <KeyboardAvoidingView>
                        <TouchableWithoutFeedback>
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
                                    styles.mt3,
                                    styles.mx3,
                                ]}
                            >
                                Nạp tiền
                            </Text>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </View>
    );
}

export default RechargeMobile;
