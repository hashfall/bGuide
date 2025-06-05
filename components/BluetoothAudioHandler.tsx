import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const UID_AUDIO_MAP: { [uid: string]: any } = {
    //UID1: require('../../assets/audio/audio1.mp3'),
    //UID2: require('../../assets/audio/audio2.mp3'),
    // Add more mappings as needed
};

export default function BluetoothAudioHandler() {
    const [manager] = useState(new BleManager());
    const [connected, setConnected] = useState(false);
    const [lastUid, setLastUid] = useState<string | null>(null);

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            manager.destroy();
        };
    }, [manager]);

    const scanAndConnect = () => {
        manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log('Scan error:', error);
                return;
            }
            // Replace with your ESP32's name or id
            if (device && device.name === 'ESP32_BGUIDE') {
                manager.stopDeviceScan();
                device
                    .connect()
                    .then((device) => {
                        setConnected(true);
                        return device.discoverAllServicesAndCharacteristics();
                    })
                    .then((device) => {
                        // Replace with your service and characteristic UUIDs
                        device.monitorCharacteristicForService(
                            'service-uuid',
                            'characteristic-uuid',
                            (error, characteristic) => {
                                if (error) {
                                    console.log('Monitor error:', error);
                                    return;
                                }
                                if (characteristic?.value) {
                                    const uid = Buffer.from(
                                        characteristic.value,
                                        'base64'
                                    ).toString('utf8');
                                    setLastUid(uid);
                                    playAudioForUid(uid);
                                }
                            }
                        );
                    });
            }
        });
    };

    const playAudioForUid = async (uid: string) => {
        const audioFile = UID_AUDIO_MAP[uid];
        if (audioFile) {
            const { sound } = await Audio.Sound.createAsync(audioFile);
            await sound.playAsync();
        } else {
            console.log('No audio mapped for UID:', uid);
        }
    };

    return (
        <View>
            <Button
                title={connected ? 'Connected' : 'Scan & Connect'}
                onPress={scanAndConnect}
                disabled={connected}
            />
            <Text>Last UID: {lastUid || 'None'}</Text>
        </View>
    );
}
