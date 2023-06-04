import { createStackNavigator } from '@react-navigation/stack';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forgot from './Forgot';

const Stack = createStackNavigator();
function Login() {
    return (
        <>
            <Stack.Navigator initialRouteName={NavigationScreenNames.SignIn} screenOptions={{ headerShown: false }}>
                <Stack.Group>
                    <Stack.Screen name={NavigationScreenNames.SignIn} component={SignIn}></Stack.Screen>
                    <Stack.Screen name={NavigationScreenNames.SignUp} component={SignUp}></Stack.Screen>
                    <Stack.Screen name={NavigationScreenNames.Forgot} component={Forgot}></Stack.Screen>
                </Stack.Group>
            </Stack.Navigator>
        </>
    );
}

export default Login;
