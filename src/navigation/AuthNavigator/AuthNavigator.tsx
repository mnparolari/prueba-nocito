import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, SignUp, Profile } from "../../screens";
import BottomTabNavigator from "../ButtonTabNavigator/ButtomTabNavigator";

const StackAuth = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <StackAuth.Navigator initialRouteName='Login' screenOptions={() => ({
            headerShown: false,
            screen: ({ navigation }) => <Login navigation={navigation} />,
        })}>
            <StackAuth.Screen name='Login' component={Login} />
            <StackAuth.Screen name='SignUp' component={SignUp} />
            <StackAuth.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
        </StackAuth.Navigator>
    )
}

export default AuthNavigator