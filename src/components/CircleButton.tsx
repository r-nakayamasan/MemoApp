import { Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
    children: string;
    style?: ViewStyle;
}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style } = props;
    return (
        <TouchableOpacity style={[styles.addButton, style]}>
            <Text style={styles.addButtonText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        right: 40,
        bottom: 40,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#4285F4',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Android用シャドウ
        shadowColor: '#000', // shadow~はiOS用シャドウ
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3, // ぼかし量
    },
    addButtonText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default CircleButton;