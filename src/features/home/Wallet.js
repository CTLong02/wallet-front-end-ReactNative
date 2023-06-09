import { useSelector } from 'react-redux';
import {
    StyledText,
    StyledKeyboardAvoidingView,
    StyledSafeAreaView,
    StyledTouchableWithoutFeedback,
    StyledView,
    StyledImage,
    StyledScrollView,
} from '../../general/components/ComponentsApp';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import { Dimensions } from 'react-native';
function Wallet() {
    const account = useSelector((state) => state.app.account);
    const [cards, setCards] = useState();
    const navigation = useNavigation();
    const screenHeight = Dimensions.get('window').height;
    useEffect(() => {
        if (account) {
            setCards([...account.cards]);
        }
    }, [account]);
    const handleCreateCard = () => {
        navigation.navigate({ name: NavigationScreenNames.CreateCard });
    };
    // console.log('cards', cards);
    // console.log(screenHeight);
    return (
        <StyledView style={{ maxHeight: screenHeight - 90 }}>
            <StyledView className="bg-cyan-800 flex flex-row px-3 py-4 rounded-b-xl items-center">
                <StyledTouchableWithoutFeedback>
                    <StyledImage source={require('../../assets/icon/menu.png')}></StyledImage>
                </StyledTouchableWithoutFeedback>
                <StyledView className="flex-grow">
                    <StyledText className="text-center text-2xl text-white font-semibold">Ví</StyledText>
                </StyledView>
            </StyledView>
            <StyledScrollView className="px-4">
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
                    <StyledText className="text-center px-3 py-2 mt-6 bg-cyan-800 rounded-lg shadow-lg font-semibold text-white text-lg">
                        Thêm thẻ
                    </StyledText>
                </StyledTouchableWithoutFeedback>
            </StyledScrollView>
        </StyledView>
    );
}

export default Wallet;
