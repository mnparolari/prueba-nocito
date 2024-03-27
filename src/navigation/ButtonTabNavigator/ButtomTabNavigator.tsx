import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./ButtomTabNavigator.style";
import Feather from '@expo/vector-icons/Feather'
import { colors } from "../../constants/colors";
import ProfileNavigator from "../ProfileNavigator/ProfileNavigator";
import PostNavigator from "../PostNavigator/PostNavigator";
import { Home } from "../../screens";


const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Home" screenOptions={() => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        })}>
            <BottomTab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather size={24} name='home' color={focused ? '#fff' : colors.secondary} />
                )
            }} />
            <BottomTab.Screen name='ProfileNav' component={ProfileNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather size={24} name='user' color={focused ? '#fff' : colors.secondary} />
                )
            }} />
            <BottomTab.Screen name='PostNav' component={PostNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather size={24} name='list' color={focused ? '#fff' : colors.secondary} />
                )
            }} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator