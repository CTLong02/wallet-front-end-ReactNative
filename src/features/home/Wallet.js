import { useSelector } from 'react-redux';
import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
    Modal,
} from 'react-native';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import { Dimensions } from 'react-native';
import styles from '../../general/Styles/AppStyles';
function Wallet() {
    const account = useSelector((state) => state.app.account);
    const [cards, setCards] = useState([]);
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
    return (
        <View style={[[styles.flexCol], { maxHeight: screenHeight - 90 }]}>
            <View style={[styles.p3, styles.bgGreenMain, styles.roundedBottomXl, styles.flexRow]}>
                <TouchableWithoutFeedback>
                    <Image source={require('../../assets/icon/menu.png')}></Image>
                </TouchableWithoutFeedback>
                <View style={styles.flexGrow}>
                    <Text style={[styles.textXl, styles.textCenter, styles.fw600, styles.textWhite]}>Ví</Text>
                </View>
            </View>
            <ScrollView style={styles.mx3}>
                <View>
                    {cards && cards.length > 0 ? (
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
                </View>
                <TouchableWithoutFeedback onPress={handleCreateCard} delayPressIn={100}>
                    <Text
                        style={[
                            styles.shawDowLg,
                            styles.p2,
                            styles.bgGreenMain,
                            styles.textCenter,
                            styles.textWhite,
                            styles.textLg,
                            styles.fw600,
                            styles.roundedLg,
                            styles.mt3,
                        ]}
                    >
                        Thêm thẻ
                    </Text>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
}

export default Wallet;
