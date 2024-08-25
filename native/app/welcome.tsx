import { View, Text, StyleSheet, Pressable, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenWrapper from '@/components/ScreenWrapper';
import React from 'react';
import { theme } from '@/theme';
import { hp, wp } from '@/helpers/common';
import {LinearGradient} from 'expo-linear-gradient';
import Button from '@/components/Button';
import { useRouter } from 'expo-router';

const Welcome = () => {

    const router = useRouter();

    return (
        <ImageBackground source={require('@/assets/images/hero-background.png')} style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <LinearGradient
                colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', '#fff', '#fff']}
                style={styles.gradient}
            >
            <SafeAreaView style={{ flex: 1 }}>
                <ScreenWrapper>
                    <View style={styles.content}>
                        <Text style={styles.title}>Explore The Things You Love</Text>
                        <Text style={styles.punchline}>Shop for unique and creative goods from frinds and family near you.</Text>
                        <Button
                            hasShadow={true}
                            buttonStyle={{ width: '90%' }}
                            title="Get Started"
                            onPress={() => router.push({ pathname: '/tutorial1' })}
                        />
                        <View style={styles.bottomTextContainer}>
                            <Text style={styles.loginText}>
                                Already a member?
                            </Text>
                            <Pressable onPress={() => router.push({ pathname: '/home' })}>
                                <Text style={[styles.loginText, {color: theme.colors.primary, fontWeight: theme.fonts.semibold}]}>Login</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScreenWrapper>
            </SafeAreaView>
            </LinearGradient>
        </ImageBackground>
    );
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '105%',
        marginTop: -30,
    },
    gradient: {
        width: '100%',
        height: hp(100),
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: hp(4),
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        fontWeight: theme.fonts.extrabold,
        textAlign: 'center',
    },
    punchline: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.textLight,
    },
    bottomTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    loginText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
    }
});
