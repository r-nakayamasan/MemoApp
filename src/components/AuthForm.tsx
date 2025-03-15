import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface AuthFormProps {
    title: string;
    email: string;
    password: string;
    setEmail: (text: string) => void;
    setPassword: (text: string) => void;
    buttonText: string;
    onSubmit: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
    title,
    email,
    password,
    setEmail,
    setPassword,
    buttonText,
    onSubmit,
}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>メールアドレス</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example@example.com"
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>パスワード</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="パスワードを入力"
                />
            </View>
            
            <TouchableOpacity 
                style={styles.loginButton}
                onPress={onSubmit}
            >
                <Text style={styles.loginButtonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'left',
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#fff',
        height: 48,
        padding: 8,
        fontSize: 16,
        borderRadius: 4,
    },
    loginButton: {
        backgroundColor: '#4285F4',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AuthForm; 