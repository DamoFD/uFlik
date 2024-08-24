import { View, StyleSheet } from 'react-native';
import React from 'react';

interface ScreenWrapperProps {
    children: React.ReactNode
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {

    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export default ScreenWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
});
