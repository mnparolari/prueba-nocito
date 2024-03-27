import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../../screens';

const StackProfile = createNativeStackNavigator()

function ProfileNavigator() {
    return (
        <StackProfile.Navigator
            initialRouteName="Profile"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <StackProfile.Screen name="Profile" component={Profile} />
        </StackProfile.Navigator>
    )
}

export default ProfileNavigator