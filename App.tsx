import { MainNavigator } from './src/navigation'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import fonts from './src/global/fonts';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  const [EncodeFonts] = useFonts(fonts)
  const [showMainNavigator, setShowMainNavigator] = useState(false);

  useEffect(() => {
    if (EncodeFonts) {
      setTimeout(() => {
        setShowMainNavigator(true);
      }, 3000);
    }
  }, [EncodeFonts]);

  useEffect(() => {
    AsyncStorage.clear().then(() => {
      console.log('Almacenamiento en AsyncStorage restablecido');
    }).catch((error) => {
      console.error('Error al restablecer el almacenamiento en AsyncStorage', error);
    });
  }, []);

  return (
    <NavigationContainer>
      {showMainNavigator && <MainNavigator />}
    </NavigationContainer>
  );
}