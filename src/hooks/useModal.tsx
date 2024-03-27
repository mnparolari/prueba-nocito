import { useState } from "react";

const useModal = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    return { modalVisible, toggleModal };
}

export default useModal



