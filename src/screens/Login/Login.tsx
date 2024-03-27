import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './Login.style'
import React, { useState } from 'react'
import axios from 'axios';
import Feather from '@expo/vector-icons/Feather'
import { Navigation } from '../../models'
import { MyModal } from '../../components'
import useModal from '../../hooks/useModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }: { navigation: Navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { modalVisible, toggleModal } = useModal();
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        try {
            if (!userName.trim() || !password.trim()) {
                setAlertTitle('Error al iniciar sesión');
                setAlertMessage('Debes ingresar tu correo electrónico y contraseña.');
                toggleModal();
                return;
            }
            const userExistsResponse = await axios.get('https://61c7-181-164-38-65.ngrok-free.app/usuarios', {
                params: {
                    email: userName
                }
            });
            if (!(userExistsResponse.data && userExistsResponse.data.length > 0)) {
                setAlertTitle('Error al iniciar sesión');
                setAlertMessage('No existe una cuenta asociada a este correo electrónico. Por favor, crea una cuenta.');
                toggleModal();
                return;
            }
            const response = await axios.post('https://61c7-181-164-38-65.ngrok-free.app/usuarios/signin', {
                email: userName,
                contrasenia: password,
            });
            if (response.status === 200) {
                const usuario = response.data.usuarioEncontrado;
                if (usuario && usuario.contrasenia === password) {
                    await AsyncStorage.setItem('userData', JSON.stringify(usuario));
                    navigation.navigate('BottomTabNavigator');
                } else {
                    setAlertTitle('Credenciales incorrectas.');
                    setAlertMessage('El correo electrónico o la contraseña ingresados son incorrectos. Por favor, inténtalo nuevamente.');
                    toggleModal();
                }
            } else {
                setAlertTitle('Error de autenticación.');
                setAlertMessage('Hubo un error al intentar iniciar sesión. Por favor, inténtalo nuevamente más tarde.');
                toggleModal();
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setAlertTitle('Error de autenticación.');
            setAlertMessage('Hubo un error al intentar iniciar sesión. Por favor, inténtalo nuevamente más tarde.');
            toggleModal();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image style={styles.imageLogo} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fotos-cace4.appspot.com/o/kZN245H__400x400.jpg?alt=media&token=f72534cd-09be-4d35-a6c9-60247ecdc152' }} />
                <Text style={styles.title}>Logueate para comenzar:</Text>
                <TextInput style={styles.input} value={userName} onChangeText={setUserName} placeholder='Usuario' />
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.inputPassword} value={password} onChangeText={setPassword} placeholder='Contraseña' secureTextEntry={!showPassword} />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={{ backgroundColor: '#DF9D72ff', borderRadius: 3, marginLeft: 5 }}>
                        <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="#FFF" style={{ padding: 6 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={handleLogin} style={styles.button}>
                        <Text style={{ padding: 9, fontFamily: 'EncodeMedium', fontSize: 15 }}>Iniciar sesión</Text>
                    </Pressable>
                </View>
                <View style={[styles.buttonsContainer, { marginTop: 10 }]}>
                    <Text style={{ marginBottom: 5, color: '#fff', fontFamily: 'EncodeRegular', fontSize: 15 }}>¿No tenes cuenta? Creá una:</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ padding: 9, fontFamily: 'EncodeMedium', fontSize: 15 }}>Crear cuenta</Text>
                    </Pressable>
                </View>
            </View>
            <MyModal
                title={alertTitle}
                message={alertMessage}
                modalVisible={modalVisible}
                setModalVisible={toggleModal}
            />
        </View>
    )
}

export default Login