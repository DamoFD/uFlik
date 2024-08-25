import { ActivityIndicator, View } from 'react-native';
import React from 'react';

interface LoaderProps {
    size?: "small" | "large";
    color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size="large", color="pink" }) => {

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
}

export default Loader
