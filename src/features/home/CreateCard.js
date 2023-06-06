import { StyledView, StyledText, StyledTextInput } from '../../general/components/ComponentsApp';
function CreateCard() {
    return (
        <StyledView className="flex flex-col justify-center min-h-full">
            <StyledView className="px-4 py-3 mx-3 rounded-lg shadow-lg bg-cyan-800">
                <StyledView>
                    <StyledText>Số thẻ</StyledText>
                    <StyledTextInput></StyledTextInput>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}

export default CreateCard;
