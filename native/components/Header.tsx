import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {

    return (
        <View style={styles.topNav}>
            <Text style={[styles.topText, { fontWeight: 'bold', fontSize: 16 }]}>u<Text style={{color: "pink"}}>Flik</Text></Text>
            <Text style={styles.topText}>Categories</Text>
            <Text style={styles.topText}>For You</Text>
            <AntDesign name="search1" size={20} style={styles.topText} />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        width: '100%',
        padding: 20,
    },
    topText: {
        color: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10
    },
});
