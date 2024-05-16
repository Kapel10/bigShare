import SignUp from "@/components/SignUp/SignUp";
import {Stack, Link} from 'expo-router';
import {View} from "react-native";

export default function Index() {
    return (
        <Stack>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            }}>
                <Link href="/SignInPage">Sign in</Link>
            </View>
        </Stack>
    );
}


