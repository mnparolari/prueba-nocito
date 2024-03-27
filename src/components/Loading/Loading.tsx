import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './Loading.style';

const Loading = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#000"/>
    </View>
);

export default Loading;