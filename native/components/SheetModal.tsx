import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { PostContext } from '../types/types';

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
