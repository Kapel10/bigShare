import { StyleSheet } from "react-native";
import {darkBlueFont} from "@/assets/fonts/Fonts";

export const NavbarStyles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 80,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
    },
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    iconContainer: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: darkBlueFont,
    }
});