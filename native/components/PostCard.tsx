import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PostCard = ({ post }) => {

    return (
        <ImageBackground style={styles.container} source={{uri: post.image}}>
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.title}>${post.price}</Text>
                </View>
                <Text style={styles.category}>{post.category}</Text>
            </View>
        </ImageBackground>
    );
}

export default PostCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '105%',
        marginTop: -30,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
    },
    category: {
        color: 'white',
        fontSize: 16,
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
    },
});
