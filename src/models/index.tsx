export interface Navigation {
    navigate: (route: string, params?: object) => void;
    goBack: () => void;
}

export interface ModalProps {
    title: string | undefined;
    message: string | undefined;
    modalVisible: boolean;
    setModalVisible: (arg0: boolean) => void;
}

export interface UserSignUp {
    nombre: string;
    apellido: string;
    telefono: number;
    email: string;
    contrasenia: string;
}