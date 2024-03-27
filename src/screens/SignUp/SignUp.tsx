import { Image, Alert, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './SignUp.style'
import React, { useState } from 'react'
import axios from 'axios';
import { MyModal } from '../../components'
import { Navigation, UserSignUp } from '../../models'
import useModal from '../../hooks/useModal'
import Feather from '@expo/vector-icons/Feather'


interface SignUpProps {
    navigation: Navigation;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { modalVisible, toggleModal } = useModal();
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSignUp = async () => {
        try {
            if (!name.trim() || !lastName.trim() || !phone.trim() || !email.trim() || !password.trim()) {
                setAlertTitle('Error al crear usuario');
                setAlertMessage('Debes completar todos los campos.');
                toggleModal();
                return;
            }
            const userExistsResponse = await axios.get('https://61c7-181-164-38-65.ngrok-free.app/usuarios', {
                params: {
                    email: email
                }
            });
            if (userExistsResponse.data && userExistsResponse.data.length > 0) {
                const existingUser = userExistsResponse.data.find(user => user.email === email);
                if (existingUser) {
                    setAlertTitle('Usuario ya creado');
                    setAlertMessage('Ya existe un usuario creado con este correo electrónico. Debes iniciar sesión.');
                    toggleModal();
                    setTimeout(() => {
                        navigation.navigate('Login');
                    }, 4000);
                    return;
                }
            }
            const newUser: UserSignUp = {
                nombre: name,
                apellido: lastName,
                email: email,
                telefono: parseInt(phone),
                contrasenia: password,
            };
            const response = await axios.post('https://61c7-181-164-38-65.ngrok-free.app/usuarios/signup', newUser);
            if (response.status === 200) {
                setAlertTitle('Usuario creado correctamente');
                setAlertMessage('En segundos serás redireccionado/a para iniciar sesión.');
                toggleModal();
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 4000);
            } else {
                setAlertTitle('Error al crear usuario');
                setAlertMessage('Ocurrió un error al crear tu cuenta. Intenta nuevamente.');
                toggleModal();
            }
        } catch (error) {
            console.error('Error al registrar la cuenta:', error);
            setAlertTitle('Error al crear usuario');
            setAlertMessage('Ocurrió un error al crear tu cuenta. Intenta nuevamente.');
            toggleModal();
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image style={styles.imageLogo} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fotos-cace4.appspot.com/o/kZN245H__400x400.jpg?alt=media&token=f72534cd-09be-4d35-a6c9-60247ecdc152' }} />
                <Text style={styles.title}>Creá una cuenta:</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='Nombre' />
                <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder='Apellido' />
                <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder='Teléfono' />
                <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email' />
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.inputPassword} value={password} onChangeText={setPassword} placeholder='Contraseña' secureTextEntry={!showPassword} />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={{ backgroundColor: '#DF9D72ff', borderRadius: 3, marginLeft: 5 }}>
                        <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="#FFF" style={{ padding: 6 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={handleSignUp} style={styles.button}>
                        <Text style={{ padding: 9, fontFamily: 'EncodeMedium', fontSize: 15 }}>Crear cuenta</Text>
                    </Pressable>
                </View>
                <View style={[styles.buttonsContainer, { marginTop: 10 }]}>
                    <Text style={{ marginBottom: 5, color: '#fff', textAlign: 'center', fontFamily: 'EncodeRegular', fontSize: 15 }}>Si ya tenés una cuenta, sólo debes iniciar sesión:</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ padding: 9, fontFamily: 'EncodeMedium', fontSize: 15 }}>Iniciar sesión</Text>
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

export default SignUp
