import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: colors.secondary,
        borderRadius: 20,
        padding: 25,
        marginHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    modalTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: 10,
    },
    icon: {
        backgroundColor: colors.quaternary,
        padding: 10, 
        borderRadius: 10,
        marginTop: 15
    },
    title: {
        fontSize: 25,
        color: colors.background,
        fontFamily: 'EncodeMedium',
        textAlign: 'center',
    },
    modalMessage: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 17,
        fontFamily: 'EncodeRegular',
        textAlign: 'center',
    },
    modalButton: {
        width: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    spacing: {
        width: 20,
    }
})

export default styles