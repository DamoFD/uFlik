import { View, Image, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Loader from '@/components/Loader';

const Index = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar barStyle="dark-content" />
            <Image resizeMode="contain" style={styles.image} source={require('@/assets/images/uflik-background.png')} />
            <Loader size="large" color="#FE4056" />
        </View>
    );
}

export default Index

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
    },
});
