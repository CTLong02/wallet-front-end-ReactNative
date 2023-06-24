import { Text, View, Image } from 'react-native';
import { styled } from 'nativewind';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import Wallet from './Wallet';
import Message from './Message';
import History from './History';
import DrawMain from '../DrawerNavigator';
import styles from '../../general/Styles/AppStyles';
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
                                <View
                                    style={[
                                        styles.flex,
                                        styles.flexCol,
                                        styles.itemsCenter,
                                        { opacity: focused ? 1 : 0.5 },
                                    ]}
                                >
                                    <Image
                                        source={require('../../assets/icon/home.png')}
                                        style={styles.h6W6}
                                        resizeMode="contain"
                                    ></Image>
                                    <Text style={[styles.fw500, styles.textGreenMain, styles.textSm]}>Trang chủ</Text>
                                </View>
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
                                <View
                                    style={[
                                        styles.flex,
                                        styles.flexCol,
                                        styles.itemsCenter,
                                        { opacity: focused ? 1 : 0.5 },
                                    ]}
                                >
                                    <Image
                                        source={require('../../assets/icon/wallet.png')}
                                        style={styles.h6W6}
                                        resizeMode="contain"
                                    ></Image>
                                    <Text style={[styles.fw500, styles.textGreenMain, styles.textSm]}>Ví</Text>
                                </View>
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
                                <View
                                    style={[
                                        styles.flex,
                                        styles.flexCol,
                                        styles.itemsCenter,
                                        { opacity: focused ? 1 : 0.5 },
                                    ]}
                                >
                                    <Image
                                        source={require('../../assets/icon/message.png')}
                                        style={styles.h6W6}
                                        resizeMode="contain"
                                    ></Image>
                                    <Text style={[styles.fw500, styles.textGreenMain, styles.textSm]}>Tin nhắn</Text>
                                </View>
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
                                <View
                                    style={[
                                        styles.flex,
                                        styles.flexCol,
                                        styles.itemsCenter,
                                        { opacity: focused ? 1 : 0.5 },
                                    ]}
                                >
                                    <Image
                                        source={require('../../assets/icon/history.png')}
                                        style={styles.h6W6}
                                        resizeMode="contain"
                                    ></Image>
                                    <Text style={[styles.fw500, styles.textGreenMain, styles.textSm]}>Lịch sử</Text>
                                </View>
                            );
                        },
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
        </>
    );
}

export default Dashboard;
