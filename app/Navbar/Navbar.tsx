import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {NavbarStyles as styles} from "@/app/Navbar/NavbarStyles";
import {AcceptIcon, AccountIcon, ChatIcon, HomeIcon, PointerIcon} from "@/assets/icons/Icons";
import { useModalStore } from '../Modals/AuthModal/store';
import { router } from 'expo-router';

const Navbar = () => {
    const { currentTab, setCurrentTab } = useModalStore();

    const handleTabChange = (tab: number, route: string) => {
        setCurrentTab(tab);
        router.navigate(route);
    }
    return (
        <View style={styles.navbar}>
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.iconContainer, currentTab === 1 && styles.selected]}
                    onPress={() => handleTabChange(1, '/')}
                >
                    <HomeIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.iconContainer, currentTab === 2 && styles.selected]}
                    onPress={() => handleTabChange(2, '/Map')}
                >
                    <PointerIcon />
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.8}
                    style={[styles.iconContainer, currentTab === 3 && styles.selected]}
                    onPress={() => handleTabChange(3, '/Chat')}
                >
                    <ChatIcon />
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.8}
                    style={[styles.iconContainer, currentTab === 4 && styles.selected]}
                    onPress={() => handleTabChange(4, '/Profile')}
                >
                    <AccountIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Navbar;