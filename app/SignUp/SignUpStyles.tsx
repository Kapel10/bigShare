import { StyleSheet } from "react-native";
import {grayFont, borderColor, darkBlueFont} from '../../assets/fonts/Fonts';

export const SignUpStyles= StyleSheet.create({
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
    },
    form: {
        width: '90%',
        height: '100%',
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
        position: 'relative'
    },
    header: {
        position: 'relative',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5

    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    underline: {
        textDecorationLine: 'underline',
        color: darkBlueFont,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkBlueFont,
        width: '100%',
        height: 60,
        textAlign: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        lineHeight: 30,
    },
    requirement: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    correctInput: {
        position: 'absolute',
        right: '4%',
        top: '50%',
        transform: [{ translateY: -5.5 }]
    },
    inputContainer: {
        position: 'relative',
    },
    disabledButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: grayFont,
        width: '100%',
        height: 60,
        textAlign: 'center',
        borderRadius: 10,
    },
});
