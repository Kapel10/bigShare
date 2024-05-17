import {Button, Text, View} from "react-native";
import React from "react";
import Navbar from "@/app/Navbar/Navbar";
import AuthModal from "@/app/Modals/AuthModal/AuthModal";
import {useModalStore} from "@/app/Modals/AuthModal/store";

export default function Index() {

    const { modalVisible, setModalVisible } = useModalStore();

    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100%'}}>
            <Button title="Show Modal" onPress={() => setModalVisible(true)} />
            <AuthModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            <Navbar/>
            <Text style={{position: 'absolute', top: 100, left: 30}}>Hello</Text>
        </View>
    );
}