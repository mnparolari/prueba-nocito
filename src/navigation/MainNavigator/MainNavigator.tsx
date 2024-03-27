import React, { useEffect, useState } from 'react';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabNavigator from '../ButtonTabNavigator/ButtomTabNavigator';

const MainNavigator = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                setUser(JSON.parse(userData));
            }
        } catch (error) {
            console.error('Error al corroborar la información del usuario:', error);
        }
    };

    return user ? <BottomTabNavigator /> : <AuthNavigator />
}

export default MainNavigator