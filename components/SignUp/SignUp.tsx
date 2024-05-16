import React from 'react'
import {
    Keyboard,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ScrollView
} from "react-native";
import {SignUpStyles as styles} from "@/components/SignUp/SignUpStyles";
import {grayFont} from "@/assets/fonts/Fonts";
import {AcceptIcon, ArrowLeftIcon, CrossIcon} from "@/assets/icons/Icons";
import validator from 'validator';

const SignUp = () => {
    const [name, setName] = React.useState('');
    const [isNameFocused, setIsNameFocused] = React.useState(false);
    const [surname, setSurname] = React.useState('');
    const [isSurnameFocused, setIsSurnameFocused] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [isUsernameFocused, setIsUsernameFocused] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [isEmailFocused, setIsEmailFocused] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = React.useState(false);

    const isUsernameUnique = () => {
        return username.length < 5;
    }

    const isStrongPassword = (password: string) => {
        return /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
    };

    const allRequirements = () => {
        return !isUsernameUnique() && isStrongPassword(password)
            && password.length >= 6 && password === confirmPassword && validator.isEmail(email);
    }

    const handleConfirmPassword = () => {
        if (isConfirmPasswordFocused && confirmPassword.length === 0 && password.length === 0) return true;

        return isConfirmPasswordFocused && password !== confirmPassword && !isStrongPassword(confirmPassword)
    }

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
            <View style={{ position: 'relative'}}>
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <ArrowLeftIcon/>
                    </View>
                    <Text style={styles.title}>Регистрация</Text>
                </View>
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <View style={styles.container}>
                        <View style={styles.form}>
                            <View style={styles.inputContainer}>
                                <TextInput value={name} placeholder='Имя' placeholderTextColor={grayFont}
                                           style={styles.formInput}
                                           maxLength={20}
                                           onChangeText={(text) => {
                                               const char = text.replace(/[^а-яё]/ig, '');
                                               setName(char);
                                           }}
                                           onFocus={() => setIsNameFocused(true)}
                                />
                                {name.length > 1 && <View style={styles.correctInput}>
                                    <AcceptIcon/>
                                </View>}
                            </View>
                            {isNameFocused && name.length < 1 && (<View style={styles.requirement}>
                                <CrossIcon/>
                                <Text style={styles.text}>
                                    Введите имя.
                                </Text>
                            </View>)}
                            <View style={styles.inputContainer}>
                                <TextInput value={surname} placeholder='Фамилия' placeholderTextColor={grayFont}
                                           style={styles.formInput}
                                           onChangeText={(text) => {
                                               const char = text.replace(/[^а-яё]/ig, '');
                                               setSurname(char);
                                           }}
                                           onFocus={() => setIsSurnameFocused(true)}
                                />
                                {isSurnameFocused && surname.length < 1 && (<View style={styles.requirement}>
                                    <CrossIcon/>
                                    <Text style={styles.text}>
                                        Введите фамилию.
                                    </Text>
                                </View>)}
                            </View>
                            <Text style={styles.text}>
                                Убедитесь, что имя соответствует имени в вашем правительственном удостоверении личности.
                            </Text>
                            <View style={styles.inputContainer}>
                                <TextInput value={username} placeholder='Имя пользователя'
                                           placeholderTextColor={grayFont}
                                           style={styles.formInput}
                                           onChangeText={(text) => {
                                               const char = text.replace(/[^a-z]/ig, '');
                                               setUsername(char);
                                           }}
                                           onFocus={() => setIsUsernameFocused(true)}
                                />
                                {!isUsernameUnique() && <View style={styles.correctInput}>
                                    <AcceptIcon/>
                                </View>}
                            </View>
                            {isUsernameFocused && isUsernameUnique() && (<View style={styles.requirement}>
                                <CrossIcon/>
                                <Text style={styles.text}>
                                    Имя пользователя должно быть уникальным.
                                </Text>
                            </View>)}
                            <View style={styles.inputContainer}>
                                <TextInput value={email} placeholder='Email' placeholderTextColor={grayFont}
                                           style={styles.formInput}
                                           onChangeText={(text) => setEmail(text)}
                                           onFocus={() => setIsEmailFocused(true)}
                                />
                                {validator.isEmail(email) && <View style={styles.correctInput}>
                                    <AcceptIcon/>
                                </View>}
                            </View>
                            {isEmailFocused && !validator.isEmail(email) && (<View style={styles.requirement}>
                                <CrossIcon/>
                                <Text style={styles.text}>
                                    Неверная почта.
                                </Text>
                            </View>)}
                            <View style={styles.inputContainer}>
                                <TextInput value={password} placeholder='Пароль' placeholderTextColor={grayFont}
                                           style={styles.formInput}
                                           secureTextEntry={true}
                                           onChangeText={(text) => {
                                               const char = text.replace(/[^a-z0-9~`! @#$%^&*()-_+={[}\]|:;"'<,.>?/]/ig, '');
                                               setPassword(char);
                                           }}
                                           onFocus={() => setIsPasswordFocused(true)}
                                />
                                {password.length >= 6 && isStrongPassword(password) &&
                                    <View style={styles.correctInput}>
                                        <AcceptIcon/>
                                    </View>}
                            </View>
                            {isPasswordFocused && password.length < 6 && (
                                <View style={styles.requirement}>
                                    <CrossIcon/>
                                    <Text style={styles.text}>
                                        Пароль должен содержать минимум 6 символов.
                                    </Text>
                                </View>
                            )}
                            {isPasswordFocused && password.length >= 6 && !isStrongPassword(password) && (
                                <View style={styles.requirement}>
                                    <CrossIcon/>
                                    <Text style={styles.text}>
                                        Пароль слишком простой.
                                    </Text>
                                </View>
                            )}
                            <View style={styles.inputContainer}>
                                <TextInput value={confirmPassword} placeholder='Подтвердите пароль'
                                           placeholderTextColor={grayFont} style={styles.formInput}
                                           onFocus={() => setIsConfirmPasswordFocused(true)}
                                           secureTextEntry={true}
                                           onChangeText={(text) => {
                                               const char = text.replace(/[^a-z0-9~`! @#$%^&*()-_+={[}\]|:;"'<,.>?/]/ig, '');
                                               setConfirmPassword(char);
                                           }}
                                />
                                {password.length >= 6 && isStrongPassword(password) && password === confirmPassword &&
                                    <View style={styles.correctInput}>
                                        <AcceptIcon/>
                                    </View>}
                            </View>
                            {handleConfirmPassword() && (
                                <View style={styles.requirement}>
                                    <CrossIcon/>
                                    <Text style={styles.text}>
                                        Пароли должны совпадать.
                                    </Text>
                                </View>
                            )}
                            <Text style={styles.text}>
                                Продолжая регистрацию, я соглашаюсь с
                                <Text style={styles.underline}> Условиями использования платежей </Text>
                                , <Text style={styles.underline}>Политикой уведомлений </Text> и признаю <Text
                                style={styles.underline}>Политику конфиденциальности</Text>.
                            </Text>
                            {(allRequirements()) ? (
                                <TouchableOpacity style={styles.button}
                                                  onPress={() => console.log('Registration button pressed')}>
                                    <Text style={styles.buttonText}>Регистрация</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={[styles.button, styles.disabledButton]}>
                                    <Text style={styles.buttonText}>Регистрация</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
}

export default SignUp;