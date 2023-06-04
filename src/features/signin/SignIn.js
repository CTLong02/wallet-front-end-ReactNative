import { Text, SafeAreaView, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { styled, withExpoSnack } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import { useState } from 'react';
import AuthApi from '../../api/AuthApi';
import { toSha256 } from '../../general/utils/toSha265';
import { useDispatch } from 'react-redux';
import { signIn } from '../../app/appSlice';

const StyledTouchableWithoutFeedback = styled(TouchableWithoutFeedback);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView);

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
        if (res.result === 'success') {
            dispatch(signIn(res.data));
            navigation.navigate({ name: NavigationScreenNames.Dashboard });
        }
    };

    return (
        <StyledSafeAreaView>
            <StyledKeyboardAvoidingView>
                <StyledView className="flex flex-col justify-center h-full p-5" style={{ backgroundColor: '#196371' }}>
                    <StyledView style={{ backgroundColor: '#fff' }} className="px-4 py-3 rounded-md">
                        <StyledView>
                            <StyledText style={{ color: '#176980' }} className="font-semibold text-base">
                                Số điện thoại
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập số điện thoại"
                                className="p-1 border-b-2 border-gray-300 border-solid text-lg"
                                accessibilityLabel="phoneNumbers"
                                value={form.phoneNumbers}
                                onChangeText={(text) => handleChangeInput(text, 'phoneNumbers')}
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView className="mt-3">
                            <StyledText style={{ color: '#176980' }} className="font-semibold text-base">
                                Mật khẩu
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập mật khẩu"
                                secureTextEntry={true}
                                className="p-1 border-b-2 border-gray-300 border-solid text-lg"
                                accessibilityLabel="password"
                                value={form.password}
                                onChangeText={(text) => handleChangeInput(text, 'password')}
                                autoComplete="password"
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView className="mt-4">
                            <StyledText
                                className="font-bold text-base text-amber-500 text-right"
                                onPress={handlePressForgot}
                            >
                                Quên mật khẩu ?
                            </StyledText>
                        </StyledView>
                        <StyledView className="mt-5">
                            <StyledTouchableWithoutFeedback onPress={handleSignIn}>
                                <StyledView className="rounded-lg py-2" style={{ backgroundColor: '#196371' }}>
                                    <StyledText className="text-white text-xl text-center font-semibold">
                                        ĐĂNG NHẬP
                                    </StyledText>
                                </StyledView>
                            </StyledTouchableWithoutFeedback>
                        </StyledView>
                    </StyledView>
                    <StyledView className="flex flex-row mt-5">
                        <StyledView>
                            <StyledText className="text-white font-bold text-lg">Bạn chưa có Tài khoản ?</StyledText>
                        </StyledView>
                        <StyledTouchableWithoutFeedback onPress={handlePressSignUp}>
                            <StyledText className="text-amber-500 font-bold ml-3 text-lg">Đăng ký</StyledText>
                        </StyledTouchableWithoutFeedback>
                    </StyledView>
                </StyledView>
            </StyledKeyboardAvoidingView>
        </StyledSafeAreaView>
    );
}

export default withExpoSnack(SignIn);
