import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { PostContext } from '../types/types';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';

interface SheetModalProps {
    post: PostContext
}

const SheetModal: React.FC<SheetModalProps> = ({ post }) => {
    console.log('sheet modal', post);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.title}>${post.price}</Text>
            </View>
            <Text style={styles.category}>{post.category}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <AntDesign name="star" size={24} color="#faea07" />
                    <Text>4.8</Text>
                    <Text style={{ color: 'pink' }}>(120)</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Image source={{ uri: post.user.image }} style={{ width: 40, height: 40, borderRadius: 20 }} contentFit="cover" />
                    <Text style={{ color: 'pink' }}>{post.user.name}</Text>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>About</Text>
                <Text>This is a description</Text>
            </View>
        </View>
    );
}

export default SheetModal;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    category: {
        fontSize: 16,
    }
});
