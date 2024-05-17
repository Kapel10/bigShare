import {StyleSheet} from 'react-native';
import {darkBlueFont, grayFont} from "@/assets/fonts/Fonts";

export const AuthModalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    blurContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%',
        height: '25%',
        borderWidth: 1,
        borderColor: grayFont,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        borderRadius: 10,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkBlueFont,
        width: '80%',
        height: 60,
        textAlign: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        lineHeight: 30,
    },
});