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
    imageLogo: {
        width: 200,
        height: 200
    },
})

    export default styles