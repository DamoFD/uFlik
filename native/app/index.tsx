import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
    const router = useRouter();
    return (
        <View>
            <Pressable onPress={() => router.push('/home')}>
                <Text>Index</Text>
                <Text>Home</Text>
            </Pressable>
        </View>
    );
}

export default Index
