import { useSelector } from 'react-redux';
import {
    StyledText,
    StyledKeyboardAvoidingView,
    StyledSafeAreaView,
    StyledTouchableWithoutFeedback,
    StyledView,
    StyledImage,
} from '../../general/components/ComponentsApp';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
function Wallet() {
    const account = useSelector((state) => state.app.account);
    const [cards, setCards] = useState();
    const navigation = useNavigation();
    useEffect(() => {
        setCards([...account.cards]);
    }, [account]);
    const handleCreateCard = () => {
        navigation.navigate({ name: NavigationScreenNames.CreateCard });
    };
    return (
        <StyledSafeAreaView>
            <StyledView className="bg-cyan-800 flex flex-row px-3 py-4 rounded-b-xl items-center">
                <StyledTouchableWithoutFeedback>
                    <StyledImage source={require('../../assets/icon/menu.png')}></StyledImage>
                </StyledTouchableWithoutFeedback>
                <StyledView className="flex-grow">
                    <StyledText className="text-center text-2xl text-white font-semibold">Ví</StyledText>
                </StyledView>
            </StyledView>
            <StyledView className="px-4">
                {cards ? (
                    cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                bankname={card?.bankName}
                                expireDate={card?.expireDate}
                                numberOfCCard={card?.cardNumbers}
                            ></Card>
                        );
                    })
                ) : (
                    <></>
                )}
                <StyledTouchableWithoutFeedback onPress={handleCreateCard}>
                    <StyledText className="text-center px-3 py-2 mt-6 bg-cyan-800 rounded-lg shadow-lg font-semibold text-white text-xl">
                        Thêm thẻ
                    </StyledText>
                </StyledTouchableWithoutFeedback>
            </StyledView>
        </StyledSafeAreaView>
    );
}

export default Wallet;
