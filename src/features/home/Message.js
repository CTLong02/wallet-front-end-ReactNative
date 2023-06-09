import {
    StyledImage,
    StyledView,
    StyledText,
    StyledTouchableWithoutFeedback,
} from '../../general/components/ComponentsApp';
function Message() {
    return (
        <StyledView>
            <StyledView className="flex flex-row px-3 py-4 items-center bg-cyan-800 rounded-b-xl">
                <StyledTouchableWithoutFeedback>
                    <StyledImage source={require('../../assets/icon/menu.png')}></StyledImage>
                </StyledTouchableWithoutFeedback>
                <StyledText className="flex-grow text-center text-lg text-white font-semibold">Tin nhắn</StyledText>
            </StyledView>
        </StyledView>
    );
}

export default Message;
