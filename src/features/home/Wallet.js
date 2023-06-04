import { Text, SafeAreaView, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { styled, withExpoSnack } from 'nativewind';
const StyledTouchableWithoutFeedback = styled(TouchableWithoutFeedback);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView);
function Wallet() {
    return (
        <StyledSafeAreaView>
            <StyledText>WalletPage</StyledText>
        </StyledSafeAreaView>
    );
}

export default withExpoSnack(Wallet);