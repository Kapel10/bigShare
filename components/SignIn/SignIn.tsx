import React from 'react'
import {Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {SignInStyles as styles} from "@/components/SignIn/SignInStyles";
import {grayFont} from "@/assets/fonts/Fonts";
import {ArrowLeftIcon} from "@/assets/icons/Icons";

const SignIn = () => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    return <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <ArrowLeftIcon/>
                    </View>
                    <Text style={styles.title}>Войти</Text>
                </View>
                <View style={styles.form}>
                    <TextInput placeholder='Имя пользователя' placeholderTextColor={grayFont} style={styles.formInput}/>
                    <TextInput placeholder='Пароль' secureTextEntry={true} placeholderTextColor={grayFont} style={styles.formInput}/>
                    <Text style={styles.text}>Забыли пароль?</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Войти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
}

export default SignIn;