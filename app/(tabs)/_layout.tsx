import { COLORS } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <Tabs
                    screenOptions={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarActiveTintColor: COLORS.primary,
                        tabBarInactiveTintColor: COLORS.grey,
                        tabBarStyle: {
                            backgroundColor: 'black',
                            borderTopWidth: 0,
                            position: 'absolute',
                            elevation: 0,
                            height: 40,
                            paddingBottom: 8,
                        },
                    }}
                >
                    <Tabs.Screen
                        name='index'
                        options={{
                            tabBarIcon: ({ size, color }) => (
                                <Ionicons
                                    name='home'
                                    size={size}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='bookmarks'
                        options={{
                            tabBarIcon: ({ size, color }) => (
                                <Ionicons
                                    name='bookmark'
                                    size={size}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='create'
                        options={{
                            tabBarIcon: ({ size, color }) => (
                                <Ionicons
                                    name='add-circle'
                                    size={size}
                                    color={color}
                                />
                            ),
                        }}
                    />
                </Tabs>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
