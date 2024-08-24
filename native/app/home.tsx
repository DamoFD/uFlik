import { View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Swiper from 'react-native-deck-swiper';
import PostCard from '@/components/PostCard';

const Home = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '2024 Corvette',
            price: '23,489',
            category: 'Cars & Vehicles',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1532695742255-ca4210d34599?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '2022 Kawasaki Ninja',
            price: '2,043',
            category: 'Cars & Vehicles',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Nike Air Max 270',
            price: '249',
            category: 'Clothing & Accessories',
        }
    ]);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Header />
            <Swiper
                cards={posts}
                renderCard={(post) => <PostCard post={post} />}
                onSwiped={(cardIndex) => { console.log('Swiped card index: ', cardIndex) }}
                onSwipedAll={() => { console.log('Swiped all cards') }}
                stackSize={3}
                infinite={true}
                verticalSwipe={false}
                cardVerticalMargin={0}
                cardHorizontalMargin={0}
                containerStyle={{ flex: 1, height: '105%', marginTop: -30 }}
                backgroundColor={'white'}
            />
        </View>
    );
}

export default Home;
