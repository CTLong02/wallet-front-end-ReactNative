import { Text, View, Image } from 'react-native';
import { styled, withExpoSnack } from 'nativewind';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import Wallet from './Wallet';
import Message from './Message';
import History from './History';
import DrawMain from '../DrawerNavigator';
const Tab = createBottomTabNavigator();
const StyledImage = styled(Image);
const StyledView = styled(View);
const StyledText = styled(Text);
function Dashboard() {
    return (
        <>
            <Tab.Navigator
                initialRouteName={NavigationScreenNames.Home}
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        elevation: 0,
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        height: 80,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 3.5,
                        elevation: 5,
                    },
                }}
            >
                <Tab.Screen
                    name={NavigationScreenNames.DrawMain}
                    component={DrawMain}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <StyledView className="flex flex-col items-center">
                                    <StyledImage
                                        source={require('../../assets/icon/home.png')}
                                        className={`w-6 h-6 ${focused ? 'opacity-100' : 'opacity-50'}`}
                                        resizeMode="contain"
                                    ></StyledImage>
                                    <StyledText
                                        className={`font-semibold text-cyan-600 ${
                                            focused ? 'opacity-100' : 'opacity-50'
                                        }`}
                                    >
                                        Trang chủ
                                    </StyledText>
                                </StyledView>
                            );
                        },
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name={NavigationScreenNames.Wallet}
                    component={Wallet}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <StyledView className="flex flex-col items-center">
                                    <StyledImage
                                        source={require('../../assets/icon/wallet.png')}
                                        className={`w-6 h-6 ${focused ? 'opacity-100' : 'opacity-50'}`}
                                        resizeMode="contain"
                                    ></StyledImage>
                                    <StyledText
                                        className={`font-semibold text-cyan-600 ${
                                            focused ? 'opacity-100' : 'opacity-50'
                                        }`}
                                    >
                                        Ví
                                    </StyledText>
                                </StyledView>
                            );
                        },
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name={NavigationScreenNames.Message}
                    component={Message}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <StyledView className="flex flex-col items-center">
                                    <StyledImage
                                        source={require('../../assets/icon/message.png')}
                                        className={`w-6 h-6 ${focused ? 'opacity-100' : 'opacity-50'}`}
                                        resizeMode="contain"
                                    ></StyledImage>
                                    <StyledText
                                        className={`font-semibold text-cyan-600 ${
                                            focused ? 'opacity-100' : 'opacity-50'
                                        }`}
                                    >
                                        Tin nhắn
                                    </StyledText>
                                </StyledView>
                            );
                        },
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name={NavigationScreenNames.History}
                    component={History}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <StyledView className="flex flex-col items-center">
                                    <StyledImage
                                        source={require('../../assets/icon/history.png')}
                                        className={`w-6 h-6 ${focused ? 'opacity-100' : 'opacity-50'}`}
                                        resizeMode="contain"
                                    ></StyledImage>
                                    <StyledText
                                        className={`font-semibold text-cyan-600 ${
                                            focused ? 'opacity-100' : 'opacity-50'
                                        }`}
                                    >
                                        Lịch sử
                                    </StyledText>
                                </StyledView>
                            );
                        },
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
        </>
    );
}

export default withExpoSnack(Dashboard);
