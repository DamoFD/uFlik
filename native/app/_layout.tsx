import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';

const _layout = () => {

    return (
        <MainLayout />
    );
}

const MainLayout = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/welcome');
    });

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        />
    );
}

export default _layout;
