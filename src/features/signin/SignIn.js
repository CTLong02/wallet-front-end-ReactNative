import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import { useState } from 'react';
import AuthApi from '../../api/AuthApi';
import { toSha256 } from '../../general/utils/toSha265';
import { useDispatch } from 'react-redux';
import { signIn } from '../../app/appSlice';
import Toasts from '../../app/components/Toasts';
import styles from '../../general/Styles/AppStyles';

function SignIn() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        phoneNumbers: '',
        password: '',
    });
    const handlePressSignUp = () => {
        navigation.navigate({ name: NavigationScreenNames.SignUp });
    };
    const handlePressForgot = () => {
        navigation.navigate({ name: NavigationScreenNames.Forgot });
    };
    const handleChangeInput = (text, fieldName) => {
        setForm({
            ...form,
            [fieldName]: text,
        });
    };
    const handleSignIn = async () => {
        const res = await AuthApi.signIn({
            ...form,
            password: toSha256(form.password),
        });
        console.log(res, 'res');
        if (res && res.result === 'success') {
            Toasts.showSuccess(`Xin chào ${res.data.fullname}!`);
            dispatch(signIn(res.data));
            navigation.navigate({ name: NavigationScreenNames.Dashboard });
        }
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <View style={[styles.bgGreenMain, styles.flex, styles.justifyCenter, styles.hFull, styles.p3]}>
                    <View style={[styles.bgWhite, styles.p3, styles.roundedMd]}>
                        <View>
                            <Text style={[styles.textGreenMain, styles.textMd, styles.fw600]}>Số điện thoại</Text>
                            <TextInput
                                placeholder="Nhập số điện thoại"
                                style={[styles.borderB, styles.textMd]}
                                accessibilityLabel="phoneNumbers"
                                value={form.phoneNumbers}
                                onChangeText={(text) => handleChangeInput(text, 'phoneNumbers')}
                            ></TextInput>
                        </View>
                        <View style={[styles.mt3]}>
                            <Text style={[styles.textGreenMain, styles.textMd, styles.fw600]}>Mật khẩu</Text>
                            <TextInput
                                placeholder="Nhập mật khẩu"
                                secureTextEntry={true}
                                style={[styles.borderB, styles.textMd]}
                                accessibilityLabel="password"
                                value={form.password}
                                onChangeText={(text) => handleChangeInput(text, 'password')}
                                autoComplete="password"
                            ></TextInput>
                        </View>
                        <View style={styles.mt3}>
                            <Text
                                style={[styles.textMd, styles.textYellow, styles.textRight, styles.fw600]}
                                onPress={handlePressForgot}
                            >
                                Quên mật khẩu ?
                            </Text>
                        </View>
                        <View style={styles.mt3}>
                            <TouchableWithoutFeedback onPress={handleSignIn}>
                                <View style={[styles.p3, styles.bgGreenMain, styles.roundedLg]}>
                                    <Text style={[styles.textWhite, styles.textLg, styles.fw600, styles.textCenter]}>
                                        ĐĂNG NHẬP
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={[styles.flex, styles.flexRow, styles.itemsCenter, styles.py3]}>
                        <View>
                            <Text style={[styles.textWhite, styles.fw500, styles.textMd, styles.mr3]}>
                                Bạn chưa có Tài khoản ?
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity delayPressIn={300} onPress={handlePressSignUp}>
                                <Text style={[styles.textYellow, styles.fw500, styles.textLg, styles.textRight]}>
                                    Đăng ký
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default SignIn;
