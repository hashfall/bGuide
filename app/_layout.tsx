import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar style='light' backgroundColor='black' />
                <Stack screenOptions={{ headerShown: false }} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
