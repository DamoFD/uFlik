import { ImageBackground, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { PostContext } from '../types/types';

interface PostCardProps {
    post: PostContext
    onPress: (post: PostContext) => void
}

const PostCard: React.FC<PostCardProps> = ({ onPress, post }) => {

    return (
        <Pressable onPress={() => onPress(post)}>
            <ImageBackground style={styles.container} source={{uri: post.image}}>
                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.title}>${post.price}</Text>
                    </View>
                    <Text style={styles.category}>{post.category}</Text>
                </View>
            </ImageBackground>
        </Pressable>
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
    bottomSheet: {
        zIndex: 20,
        elevation: 20,
        height: '100%',
    },
});
