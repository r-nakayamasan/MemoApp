import { 
    View, StatusBar, SafeAreaView, StyleSheet, KeyboardAvoidingView, Text, TouchableOpacity
} from "react-native";

import React, { useState } from "react";

import AuthForm from "../../components/AuthForm";

import { Link, router } from "expo-router";

const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        console.log('サインアップ処理:', email, password);

        // ログイン処理成功時の処理
        // メモ一覧画面に遷移
        router.push('/memo/list');
    };

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>

                <View style={styles.formContainer}>
                    <AuthForm
                        title="Sign Up"
                        email={email}
                        password={password}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        buttonText="作成"
                        onSubmit={handleSignUp}
                    />

                    <View style={styles.footer}>
                        <Link href="/auth/log_in" asChild>
                            <TouchableOpacity onPress={() => console.log('ログイン')}>
                                <Text style={styles.footerText}>すでにアカウントをお持ちの方はこちら</Text>
                            </TouchableOpacity>
                        </Link>
                        <TouchableOpacity onPress={() => console.log('利用規約')}>
                            <Text style={styles.footerText}>利用規約とプライバシーポリシー</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    statusBarBackground: {
        height: 60,
        backgroundColor: '#4285F4',
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 27,
    },
    footer: {
        marginTop: 24,
        alignItems: 'center',
    },
    footerText: {
        color: '#4285F4',
        fontSize: 14,
        marginVertical: 8,
    },
});

export default SignUp;
