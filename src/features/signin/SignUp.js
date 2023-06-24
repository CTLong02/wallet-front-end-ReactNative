import { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { styled, withExpoSnack } from 'nativewind';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';
import user from '../../assets/icon/user.png';
import left from '../../assets/icon/left.png';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import AuthApi from '../../api/AuthApi';
import { toSha256 } from '../../general/utils/toSha265';
import Toasts from '../../app/components/Toasts';
import { useDispatch } from 'react-redux';
import { signIn } from '../../app/appSlice';
import styles from '../../general/Styles/AppStyles';

function SignUp() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        fullname: '',
        gender: '',
        phoneNumbers: '',
        identifyPerson: '',
        password: '',
        rePassword: '',
    });
    const handleChangeGender = (gender) => {
        console.log(gender);
        setForm({
            ...form,
            gender: gender,
        });
    };
    const handleChangeForm = (value, name) => {
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleBackSignIn = () => {
        navigation.navigate(NavigationScreenNames.SignIn);
    };
    const handleSignUp = async () => {
        const res = await AuthApi.signUp({ ...form, password: toSha256(form.password) });
        if (res && res.result === 'success') {
            Toasts.showSuccess('Bạn đã đăng kí tài khoản thành công');
            dispatch(signIn(res.data));
            navigation.navigate({ name: NavigationScreenNames.Dashboard });
        }
    };
    // console.log(form);
    return (
        <SafeAreaView style={[styles.bgGreenMain, styles.px3, styles.hFull]}>
            <View style={styles.py3}>
                <TouchableOpacity onPress={handleBackSignIn}>
                    <Image source={left}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={[styles.bgWhite, styles.p3, styles.roundedMd]}>
                        <View style={[styles.containerCenter]}>
                            <Image source={user}></Image>
                        </View>
                        <View>
                            <Text style={[styles.textGreenMain, styles.textSx, styles.fw500, styles.mt3]}>
                                Họ và tên
                            </Text>
                            <TextInput
                                placeholder="Nhập họ và tên"
                                style={[styles.borderB, styles.textSx]}
                                onChangeText={(text) => handleChangeForm(text, 'fullname')}
                            ></TextInput>
                        </View>
                        <View>
                            <Text style={[styles.textGreenMain, styles.textSx, styles.fw500, styles.mt3]}>
                                Số điện thoại
                            </Text>
                            <TextInput
                                placeholder="Nhập số điện thoại"
                                style={[styles.borderB, styles.textSx]}
                                onChangeText={(text) => handleChangeForm(text, 'phoneNumbers')}
                            ></TextInput>
                        </View>
                        <View>
                            <Text style={[styles.textGreenMain, styles.textSx, styles.fw500, styles.mt3]}>
                                Giới tính
                            </Text>
                            <View style={[styles.borderB]}>
                                <Picker
                                    onValueChange={handleChangeGender}
                                    mode="dialog"
                                    selectedValue={form.gender}
                                    style={[styles.textSx]}
                                >
                                    <Picker.Item label="Chọn giới tính của bạn"></Picker.Item>
                                    <Picker.Item label="Nam" value={'male'}></Picker.Item>
                                    <Picker.Item label="Nữ" value={'female'}></Picker.Item>
                                    <Picker.Item label="Khác" value={'unknow'}></Picker.Item>
                                </Picker>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.textGreenMain, styles.textSx, styles.fw500, styles.mt3]}>
                                Số CCCD/CMND
                            </Text>
                            <TextInput
                                placeholder="Nhập số CCCD/CMND"
                                style={[styles.borderB, styles.textSx]}
                                onChangeText={(text) => handleChangeForm(text, 'identifyPerson')}
                            ></TextInput>
                        </View>
                        <View>
                            <Text style={[styles.textGreenMain, styles.textSx, styles.fw500, styles.mt3]}>
                                Mật khẩu
                            </Text>
                            <TextInput
                                placeholder="Nhập mật khẩu"
                                style={[styles.borderB, styles.textSx]}
                                onChangeText={(text) => handleChangeForm(text, 'password')}
                                secureTextEntry
                            ></TextInput>
                        </View>
                        <View>
                            <Text style={[styles.textGreenMain, styles.textSx, styles.fw500, styles.mt3]}>
                                Nhập lại mật khẩu
                            </Text>
                            <TextInput
                                placeholder="Nhập lại mật khẩu"
                                style={[styles.borderB, styles.textSx]}
                                onChangeText={(text) => handleChangeForm(text, 'rePassword')}
                                secureTextEntry
                            ></TextInput>
                        </View>
                        <View style={styles.mt3}>
                            <TouchableOpacity onPress={handleSignUp}>
                                <Text
                                    style={[
                                        styles.textWhite,
                                        styles.textLg,
                                        styles.fw600,
                                        styles.textCenter,
                                        styles.p2,
                                        styles.bgGreenMain,
                                        styles.roundedLg,
                                    ]}
                                >
                                    ĐĂNG KÝ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp;
