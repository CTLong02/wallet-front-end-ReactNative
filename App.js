import React from 'react';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Login from './src/features/signin';
import NavigationScreenNames from './src/general/contants/NavigationScreenNames';
import Dashboard from './src/features/home/index';
import CreateCard from './src/features/home/CreateCard';
import TransferByWallet from './src/features/transferMoney/screens/TransferWithWallet';
import EnterMoney from './src/features/transferMoney/screens/EnterMoney';

const Stack = createStackNavigator();
function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer theme={DefaultTheme}>
                    <Stack.Navigator
                        initialRouteName={NavigationScreenNames.Login}
                        screenOptions={{ headerShown: false }}
                    >
                        <Stack.Group>
                            <Stack.Screen
                                name={NavigationScreenNames.Login}
                                component={Login}
                                options={{ headerShown: false }}
                            ></Stack.Screen>
                        </Stack.Group>

                        <Stack.Group>
                            <Stack.Screen
                                name={NavigationScreenNames.Dashboard}
                                component={Dashboard}
                                options={{ headerShown: false }}
                            ></Stack.Screen>
                        </Stack.Group>
                        <Stack.Screen name={NavigationScreenNames.CreateCard} component={CreateCard}></Stack.Screen>
                        <Stack.Group>
                            <Stack.Screen
                                name={NavigationScreenNames.TransferByWallet}
                                component={TransferByWallet}
                            ></Stack.Screen>
                            <Stack.Screen name={NavigationScreenNames.EnterMoney} component={EnterMoney}></Stack.Screen>
                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}

export default App;
