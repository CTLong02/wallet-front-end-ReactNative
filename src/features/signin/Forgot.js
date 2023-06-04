import { View, Text, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { styled, withExpoSnack } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import left from '../../assets/icon/left.png';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView);
const StyledImage = styled(Image);

function Forgot() {
    const navigation = useNavigation();
    const handleBackSignIn = () => {
        navigation.navigate(NavigationScreenNames.SignIn);
    };
    return (
        <StyledSafeAreaView style={{ backgroundColor: '#196371' }} className="min-h-screen">
            <StyledView className="py-3">
                <StyledTouchableOpacity onPress={handleBackSignIn}>
                    <StyledImage source={left}></StyledImage>
                </StyledTouchableOpacity>
            </StyledView>
            <StyledKeyboardAvoidingView className="mt-20">
                <StyledView className="px-5">
                    <StyledView style={{ backgroundColor: '#fff' }} className="px-4 py-3 rounded-md">
                        <StyledView>
                            <StyledText style={{ color: '#176980' }} className="font-semibold text-base">
                                Số điện thoại
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập số điện thoại"
                                className="text-xl border-b-2 border-gray-300 border-solid"
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView className="mt-2">
                            <StyledText style={{ color: '#176980' }} className="font-semibold text-base">
                                Số CCCD/CMND
                            </StyledText>
                            <StyledTextInput
                                placeholder="Nhập số CCCD/CMND"
                                secureTextEntry={true}
                                className="text-xl border-b-2 border-gray-300 border-solid"
                            ></StyledTextInput>
                        </StyledView>
                        <StyledView className="mt-5">
                            <StyledTouchableOpacity className="rounded-lg py-2" style={{ backgroundColor: '#196371' }}>
                                <StyledText className="text-white text-base text-center font-semibold">
                                    QUÊN MẬT KHẨU
                                </StyledText>
                            </StyledTouchableOpacity>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledKeyboardAvoidingView>
        </StyledSafeAreaView>
    );
}

export default withExpoSnack(Forgot);
