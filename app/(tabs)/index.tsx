import BluetoothAudioHandler from '@/components/BluetoothAudioHandler';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles/index.styles';

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.brandSection}>
                <Text style={styles.appName}>bGuide</Text>
            </View>
            <View>
                <BluetoothAudioHandler />
            </View>
        </View>
    );
}
