import { View, Text, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { styled, withExpoSnack } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import left from '../../assets/icon/left.png';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import styles from '../../general/Styles/AppStyles';

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
        <SafeAreaView style={[styles.bgGreenMain, styles.hFull, styles.flex, styles.flexCol]}>
            <View style={styles.my3}>
                <TouchableOpacity onPress={handleBackSignIn}>
                    <Image source={left}></Image>
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={[styles.flexCol, styles.justifyCenter, styles.flexGrow]}>
                <View style={styles.mx3}>
                    <View style={[styles.bgWhite, styles.p3, styles.roundedMd]}>
                        <View>
                            <Text style={[styles.textGreenMain, styles.textSx, styles.fw500, styles.mt3]}>
                                Số điện thoại
                            </Text>
                            <TextInput
                                placeholder="Nhập số điện thoại"
                                style={[styles.borderB, styles.textMd]}
                            ></TextInput>
                        </View>
                        <View style={styles.mt3}>
                            <Text style={[styles.textGreenMain, styles.textSx, styles.fw500, styles.mt3]}>
                                Số CCCD/CMND
                            </Text>
                            <TextInput
                                placeholder="Nhập số CCCD/CMND"
                                secureTextEntry={true}
                                style={[styles.borderB, styles.textMd]}
                            ></TextInput>
                        </View>
                        <View style={styles.mt3}>
                            <TouchableOpacity style={[styles.p2, styles.bgGreenMain, styles.roundedLg]}>
                                <Text style={[styles.textWhite, styles.textMd, styles.fw600, styles.textCenter]}>
                                    QUÊN MẬT KHẨU
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Forgot;
