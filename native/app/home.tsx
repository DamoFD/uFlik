import { Text, View, StatusBar, StyleSheet } from 'react-native';
import React, { useState, useCallback, useRef } from 'react';
import Header from '@/components/Header';
import Swiper from 'react-native-deck-swiper';
import PostCard from '@/components/PostCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { PostContext } from '@/types/types';
import SheetModal from '@/components/SheetModal';

const Home = () => {
    const [isOpen, setIsOpen] = useState(-1);
    const [currentPost, setCurrentPost] = useState<PostContext>({
        id: 0,
        image: '',
        title: '',
        price: '',
        category: '',
        user: {
            name: '',
            image: '',
        },
    });
    const [posts, setPosts] = useState([
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '2024 Corvette',
            price: '23,489',
            category: 'Cars & Vehicles',
            user: {
                name: 'John Doe',
                image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1532695742255-ca4210d34599?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '2022 Kawasaki Ninja',
            price: '2,043',
            category: 'Cars & Vehicles',
            user: {
                name: 'John Doe',
                image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Nike Air Max 270',
            price: '249',
            category: 'Clothing & Accessories',
            user: {
                name: 'John Doe',
                image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
        }
    ]);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        setIsOpen(index);
        console.log('handleSheetChanges', index);
    }, []);

    const openBottomSheet = (post: PostContext) => {
        console.log('openBottomSheet', post);
        setCurrentPost(post);
        bottomSheetRef.current?.snapToIndex(0);
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Header />
            <Swiper
                cards={posts}
                renderCard={(post) => <PostCard onPress={openBottomSheet} post={post} />}
                onSwiped={(cardIndex) => { console.log('Swiped card index: ', cardIndex) }}
                onSwipedAll={() => { console.log('Swiped all cards') }}
                stackSize={3}
                infinite={true}
                verticalSwipe={false}
                horizontalSwipe={isOpen === -1 ? true : false}
                cardVerticalMargin={0}
                cardHorizontalMargin={0}
                containerStyle={{ flex: 1, height: '105%', marginTop: -30 }}
                backgroundColor={'white'}
            />
        <BottomSheet
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            snapPoints={['25%', '50%']}
            index={-1}
            style={styles.bottomSheet}
            enablePanDownToClose={true}
        >
            <BottomSheetView>
                <SheetModal post={currentPost} />
            </BottomSheetView>
        </BottomSheet>
        </GestureHandlerRootView>
    );
}

export default Home;

const styles = StyleSheet.create({
    bottomSheet: {
        flex: 1,
    }
});
