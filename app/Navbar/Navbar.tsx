import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {NavbarStyles as styles} from "@/app/Navbar/NavbarStyles";
import {AcceptIcon, AccountIcon, ChatIcon, HomeIcon, PointerIcon} from "@/assets/icons/Icons";

const Navbar = () => {
    const [selectedId, setSelectedId] = useState(1);
    return (
        <View style={styles.navbar}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.iconContainer, selectedId === 1 && styles.selected]}
                    onPress={() => setSelectedId(1)}
                >
                    <HomeIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.iconContainer, selectedId === 2 && styles.selected]}
                    onPress={() => setSelectedId(2)}
                >
                    <PointerIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.iconContainer, selectedId === 3 && styles.selected]}
                    onPress={() => setSelectedId(3)}
                >
                    <ChatIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.iconContainer, selectedId === 4 && styles.selected]}
                    onPress={() => setSelectedId(4)}
                >
                    <AccountIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Navbar;