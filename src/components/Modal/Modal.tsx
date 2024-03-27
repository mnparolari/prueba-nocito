import { Text, View, Modal as MyModal, Pressable } from 'react-native';
import React from 'react';
import styles from './Modal.style';
import { ModalProps } from '../../models';
import Feather from '@expo/vector-icons/Feather';

const Modal: React.FC<ModalProps> = ({ title, message, modalVisible, setModalVisible }) => {

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    return (
        <MyModal visible={modalVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.message}>{message}</Text>
                    </View>
                    <Pressable onPress={handleCloseModal} style={styles.icon}>
                        <Feather size={24} name='check' color={'#fff'} />
                    </Pressable>
                </View>
            </View>
        </MyModal >
    )
}

export default Modal
