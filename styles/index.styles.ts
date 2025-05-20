// styles/auth.styles.ts
import { COLORS } from '@/constants/theme';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    brandSection: {
        alignItems: 'center',
        marginTop: height * 0.12,
    },
    logoContainer: {
        width: 60,
        height: 60,
        borderRadius: 18,
        backgroundColor: 'rgba(74, 222, 128, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    appName: {
        fontSize: 42,
        fontWeight: '700',
        fontFamily: 'JetBrainsMono-Medium',
        color: COLORS.primary,
        letterSpacing: 0.5,
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        color: COLORS.grey,
        letterSpacing: 1,
    },
    illustrationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    illustration: {
        width: width * 0.75,
        height: width * 0.75,
        maxHeight: 280,
    },
    termsText: {
        textAlign: 'center',
        fontSize: 12,
        color: COLORS.grey,
        maxWidth: 280,
    },
});
