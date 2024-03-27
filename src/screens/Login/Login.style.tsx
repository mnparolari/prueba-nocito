import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.quaternary,
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 35,
    },
    loginContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'EncodeLight'
    },
    input: {
        marginVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        width: 230,
        height: 40,
        fontSize: 15,
        fontFamily: 'EncodeRegular',
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.secondary,
        width: '100%',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        marginTop: 45,
        color: '#fff',
        fontFamily: 'EncodeRegular',
        fontSize: 15
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: 200,
        height: 200
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputPassword: {
        marginVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        width: 185,
        height: 40,
        fontSize: 15,
        fontFamily: 'EncodeRegular',
        textAlign: 'center'
    },
})

export default styles