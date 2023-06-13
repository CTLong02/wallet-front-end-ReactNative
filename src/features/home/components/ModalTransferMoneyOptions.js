import {
    StyledImage,
    StyledModal,
    StyledText,
    StyledTouchableWithoutFeedback,
    StyledTouchableOpacity,
    StyledView,
} from '../../../general/components/ComponentsApp';
import NavigationScreenNames from '../../../general/contants/NavigationScreenNames';
import { useNavigation } from '@react-navigation/native';
function ModalTransferMoneyOptions({ isModalTransferMoneyOptions, setIsModalTransferMoneyOptions }) {
    const navigation = useNavigation();
    const handleClose = () => {
        setIsModalTransferMoneyOptions(false);
    };
    const handleToPage = (page) => {
        setIsModalTransferMoneyOptions(false);
        navigation.navigate({ name: page });
    };
    return (
        <StyledModal
            onRequestClose={() => setIsModalTransferMoneyOptions(false)}
            transparent={true}
            visible={isModalTransferMoneyOptions}
        >
            <StyledView className="h-full flex flex-col justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <StyledTouchableWithoutFeedback onPress={handleClose}>
                    <StyledView className="flex-grow"></StyledView>
                </StyledTouchableWithoutFeedback>
                <StyledTouchableWithoutFeedback>
                    <StyledView className="bg-white pt-6 pb-10">
                        <StyledView className="flex flex-row px-4 justify-between">
                            <StyledView className="basis-1/4 flex flex-col items-center">
                                <StyledTouchableOpacity
                                    delayPressIn={100}
                                    onPress={() => handleToPage(`${NavigationScreenNames.TransferByWallet}`)}
                                >
                                    <StyledImage
                                        source={require('../../../assets/icon/transferWallet.png')}
                                    ></StyledImage>
                                </StyledTouchableOpacity>
                                <StyledText className="text-center">Đến ví</StyledText>
                            </StyledView>
                            <StyledView className="basis-1/4 flex flex-col items-center">
                                <StyledTouchableOpacity delayPressIn={100}>
                                    <StyledImage
                                        source={require('../../../assets/icon/transferBank.png')}
                                    ></StyledImage>
                                </StyledTouchableOpacity>
                                <StyledText className="text-center">Đến ngân hàng</StyledText>
                            </StyledView>
                            <StyledView className="basis-1/4 flex flex-col items-center">
                                <StyledTouchableOpacity delayPressIn={100}>
                                    <StyledImage
                                        source={require('../../../assets/icon/transferCast.png')}
                                    ></StyledImage>
                                </StyledTouchableOpacity>
                                <StyledText className="text-center">Điểm đến nhận tiền mặt</StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </StyledTouchableWithoutFeedback>
            </StyledView>
        </StyledModal>
    );
}

export default ModalTransferMoneyOptions;
