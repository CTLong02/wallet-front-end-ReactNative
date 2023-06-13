import { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {
    StyledText,
    StyledView,
    StyledSafeAreaView,
    StyledImage,
    StyledTouchableOpacity,
    StyledTouchableHighlight,
} from '../../general/components/ComponentsApp';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import { handleMoneyToString } from '../../general/utils/handleString';
import Service from './components/Service';
import Promotion from './components/Promotion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalTransferMoneyOptions from './components/ModalTransferMoneyOptions';

function Home() {
    const navigation = useNavigation();
    const account = useSelector((state) => state.app.account);
    const [moneyWithString, setMoneyWithString] = useState('');
    // console.log('account in home page', account);
    const openSlidebar = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    const [isModalTransferMoneyOptions, setIsModalTransferMoneyOptions] = useState(false);
    useEffect(() => {
        setMoneyWithString(handleMoneyToString(account?.remainMoney));
    }, [account]);
    return (
        <StyledSafeAreaView>
            <StyledView className="bg-cyan-800 px-4 pt-2 pb-12 rounded-b-3xl">
                <StyledView className="flex flex-row justify-between py-2 ">
                    <StyledView>
                        <StyledTouchableOpacity onPress={openSlidebar} delayPressIn={100}>
                            <StyledView>
                                <StyledImage source={require('../../assets/icon/menu.png')}></StyledImage>
                            </StyledView>
                        </StyledTouchableOpacity>
                    </StyledView>
                    <StyledView className="flex flex-row">
                        <StyledTouchableOpacity delayPressIn={100}>
                            <StyledView>
                                <StyledImage source={require('../../assets/icon/search.png')}></StyledImage>
                            </StyledView>
                        </StyledTouchableOpacity>
                        <StyledTouchableOpacity>
                            <StyledView>
                                <StyledImage source={require('../../assets/icon/notify.png')}></StyledImage>
                            </StyledView>
                        </StyledTouchableOpacity>
                    </StyledView>
                </StyledView>
                <StyledView className="flex flex-row justify-between py-5">
                    <StyledView className="basis-1/5">
                        <StyledView
                            className="w-14 h-14 flex-row flex items-center justify-center rounded-md"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../assets/icon/takeInMoney.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="text-white font-medium mt-2 break-words">Nạp tiền</StyledText>
                    </StyledView>
                    <StyledView className="basis-1/5">
                        <StyledView
                            className="w-14 h-14 flex-row flex items-center justify-center rounded-md"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../assets/icon/takeOutMoney.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="text-white font-medium mt-2 break-words">Rút tiền</StyledText>
                    </StyledView>
                    <StyledView className="basis-1/5">
                        <StyledTouchableOpacity onPress={() => setIsModalTransferMoneyOptions(true)} delayPressIn={100}>
                            <StyledView
                                className="w-14 h-14 flex-row flex items-center justify-center rounded-md"
                                style={{ backgroundColor: '#83B8C1' }}
                            >
                                <StyledImage
                                    className="w-10 h-10"
                                    source={require('../../assets/icon/achangeMoney.png')}
                                ></StyledImage>
                            </StyledView>
                        </StyledTouchableOpacity>
                        <StyledText className="text-white font-medium mt-2 break-words">Chuyển tiền</StyledText>
                    </StyledView>
                    <StyledView className="basis-1/5">
                        <StyledView
                            className="w-14 h-14 flex-row flex items-center justify-center rounded-md"
                            style={{ backgroundColor: '#83B8C1' }}
                        >
                            <StyledImage
                                className="w-10 h-10"
                                source={require('../../assets/icon/QR.png')}
                            ></StyledImage>
                        </StyledView>
                        <StyledText className="text-white font-medium mt-2 break-words">Mã QR</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView
                style={{ transform: [{ translateY: -50 }] }}
                className="shadow-lg mx-4 bg-white p-4 rounded-lg "
            >
                <StyledView className="flex flex-row items-center justify-between px-2">
                    <StyledView>
                        <StyledText className="text-yellow-600 font-semibold text-base">Tài khoản chính</StyledText>
                        <StyledText className="text-cyan-600 font-semibold text-lg">{moneyWithString} VND</StyledText>
                    </StyledView>
                    <StyledView>
                        <StyledTouchableOpacity delayPressIn={100}>
                            <StyledView
                                className="rounded-lg flex flex-row items-center justify-center w-10 h-10"
                                style={{ backgroundColor: '#83B8C1' }}
                            >
                                <StyledImage source={require('../../assets/icon/more.png')}></StyledImage>
                            </StyledView>
                        </StyledTouchableOpacity>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView className="px-3">
                <Service></Service>
            </StyledView>
            <StyledView className="px-3 mt-4">
                <Promotion></Promotion>
            </StyledView>
            {isModalTransferMoneyOptions ? (
                <ModalTransferMoneyOptions
                    isModalTransferMoneyOptions={isModalTransferMoneyOptions}
                    setIsModalTransferMoneyOptions={setIsModalTransferMoneyOptions}
                ></ModalTransferMoneyOptions>
            ) : (
                <></>
            )}
        </StyledSafeAreaView>
    );
}

export default Home;
