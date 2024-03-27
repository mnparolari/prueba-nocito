import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Post } from '../../screens';

const StackPost = createNativeStackNavigator()

function PostNavigator() {
    return (
        <StackPost.Navigator
            initialRouteName="Post"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <StackPost.Screen name="Post" component={Post} />
        </StackPost.Navigator>
    )
}

export default PostNavigator