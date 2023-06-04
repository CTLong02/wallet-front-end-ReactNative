import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationScreenNames from '../../general/contants/NavigationScreenNames';
import Home from '../home/Home';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();
function DrawMain() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            initialRouteName={NavigationScreenNames.Home}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name={NavigationScreenNames.Home} component={Home}></Drawer.Screen>
        </Drawer.Navigator>
    );
}

export default DrawMain;
