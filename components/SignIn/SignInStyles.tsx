import { StyleSheet } from "react-native";
import {grayFont, borderColor, darkBlueFont} from "@/assets/fonts/Fonts";

export const SignInStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        gap: 15,
    },
    title: {
        fontWeight: '800',
        fontSize: 25,
        lineHeight: 30,
    },
    text: {
        color: grayFont,
        fontSize: 20,
        lineHeight: 25,
        textAlign: 'center',
    },
    form: {
        width: '90%',
        height: '80%',
        flexDirection: 'column',
        rowGap: 15,
    },
    formInput : {
        borderWidth: 1,
        borderColor: borderColor,
        borderRadius: 8,
        width: '100%',
        fontSize: 20,
        lineHeight: 28,
        paddingHorizontal: 10,
        height: 60,
        color: grayFont,
    },
    header: {
        position: 'relative',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkBlueFont,
        width: '100%',
        height: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: borderColor,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        lineHeight: 30,
    }
});
