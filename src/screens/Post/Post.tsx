import { View, Image } from 'react-native'
import React from 'react'
import styles from './Post.style'

const Post = () => {
    return (
        <View style={styles.container} >
            <Image style={styles.imageLogo} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fotos-cace4.appspot.com/o/kZN245H__400x400.jpg?alt=media&token=f72534cd-09be-4d35-a6c9-60247ecdc152' }} />
        </View>
    )
}

export default Post

