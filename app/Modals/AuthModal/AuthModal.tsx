import React from 'react';
import {TouchableOpacity, View, Text, Modal} from "react-native";
import {AuthModalStyles as styles} from "@/app/Modals/AuthModal/AuthModalStyles";
import {useRouter} from "expo-router";
import { BlurView } from 'expo-blur';

interface Props {
    visible: boolean,
    onClose: () => void,
}

export const AuthModal = ({ visible, onClose }: Props) => {
    const router = useRouter();

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPressOut={onClose}
            >
                <BlurView intensity={50} style={styles.blurContainer} pointerEvents="box-none">
                    <View style={styles.container} pointerEvents="box-none">
                        <TouchableOpacity style={styles.button} onPress={() => router.push('../../SignIn/SignIn')}>
                            <Text style={styles.buttonText}>Войти</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => router.push('../../SignUp/SignUp')}>
                            <Text style={styles.buttonText}>Регистрация</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </TouchableOpacity>
        </Modal>
    )
}

export default AuthModal;