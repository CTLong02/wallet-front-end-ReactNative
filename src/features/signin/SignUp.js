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

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledScollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView);
function SignUp() {
    const navigation = useNavigation();
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
    };
    // console.log(form);
    return (
        <StyledSafeAreaView style={{ backgroundColor: '#176980' }} className="px-5 py-3 min-h-full">
            <StyledView className="py-2">
                <StyledTouchableOpacity onPress={handleBackSignIn}>
                    <StyledImage source={left}></StyledImage>
                </StyledTouchableOpacity>
            </StyledView>
            <StyledScollView>
                <StyledKeyboardAvoidingView>
                    <StyledView className="bg-white rounded-md p-5">
                        <StyledView className="flex flex-row justify-center items-center">
                            <StyledImage source={user}></StyledImage>
                        </StyledView>
                        <StyledView>
                            <StyledText style={{ color: '#176980' }} className="font-semibold mt-2">
                                Họ và tên
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập họ và tên"
                                className="p-1 border-b-2 border-gray-300 border-solid"
                                onChangeText={(text) => handleChangeForm(text, 'fullname')}
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView>
                            <StyledText style={{ color: '#176980' }} className="font-semibold mt-2">
                                Số điện thoại
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập số điện thoại"
                                className="p-1 border-b-2 border-gray-300 border-solid"
                                onChangeText={(text) => handleChangeForm(text, 'phoneNumbers')}
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView>
                            <StyledText style={{ color: '#176980' }} className="font-semibold mt-2">
                                Giới tính
                            </StyledText>
                            <StyledView className="border-b-2 border-gray-300 border-solid">
                                <Picker
                                    onValueChange={handleChangeGender}
                                    mode="dialog"
                                    selectedValue={form.gender}
                                    style={{ padding: 0, margin: 0 }}
                                >
                                    <Picker.Item label="Chọn giới tính của bạn"></Picker.Item>
                                    <Picker.Item label="Nam" value={'male'}></Picker.Item>
                                    <Picker.Item label="Nữ" value={'female'}></Picker.Item>
                                    <Picker.Item label="Khác" value={'unknow'}></Picker.Item>
                                </Picker>
                            </StyledView>
                        </StyledView>
                        <StyledView>
                            <StyledText style={{ color: '#176980' }} className="font-semibold mt-2">
                                Số CCCD/CMND
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập số CCCD/CMND"
                                className="p-1 border-b-2 border-gray-300 border-solid"
                                onChangeText={(text) => handleChangeForm(text, 'identifyPerson')}
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView>
                            <StyledText style={{ color: '#176980' }} className="font-semibold mt-2">
                                Mật khẩu
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập mật khẩu"
                                className="p-1 border-b-2 border-gray-300 border-solid"
                                onChangeText={(text) => handleChangeForm(text, 'password')}
                                secureTextEntry
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView>
                            <StyledText style={{ color: '#176980' }} className="font-semibold mt-2">
                                Nhập lại mật khẩu
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập lại mật khẩu"
                                className="p-1 border-b-2 border-gray-300 border-solid"
                                onChangeText={(text) => handleChangeForm(text, 'rePassword')}
                                secureTextEntry
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView className="mt-4">
                            <StyledTouchableOpacity onPress={handleSignUp}>
                                <StyledText
                                    className="text-center py-3 text-white font-bold rounded-lg"
                                    style={{ backgroundColor: '#196371' }}
                                >
                                    ĐĂNG KÝ
                                </StyledText>
                            </StyledTouchableOpacity>
                        </StyledView>
                    </StyledView>
                </StyledKeyboardAvoidingView>
            </StyledScollView>
        </StyledSafeAreaView>
    );
}

export default withExpoSnack(SignUp);
