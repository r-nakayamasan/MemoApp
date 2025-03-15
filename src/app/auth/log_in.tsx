import { 
    View, StatusBar, SafeAreaView, StyleSheet, KeyboardAvoidingView, Text, TouchableOpacity
} from "react-native";

import React, { useState } from "react";

import AuthForm from "../../components/AuthForm";

import { Link,router } from "expo-router";

const LogIn = (): JSX.Element => {
    // ログイン情報の状態管理
    // react hootsのuseStateを使用している
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ログイン処理関数
    const handleLogin = () => {
        // ログイン処理をここに実装
        console.log('ログイン処理:', email, password);

        // ログイン処理成功時の処理
        // メモ一覧画面に遷移、履歴でstackに追加している
        // router.push('/memo/list');
        // メモ一覧画面に遷移、履歴をリセットしている
        router.replace('/memo/list');
    };

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <StatusBar
                barStyle="light-content" // アイコンの色（白）
            />
            <SafeAreaView style={styles.container}>

                <View style={styles.formContainer}>                
                    <AuthForm
                        title="Log In"
                        email={email}
                        password={password}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        buttonText="ログイン"
                        onSubmit={handleLogin}
                    />

                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => console.log('パスワードリセット')}>
                            <Text style={styles.footerText}>パスワードをお忘れですか？</Text>
                        </TouchableOpacity>
                        <Link href="/auth/sign_up" asChild>
                            <TouchableOpacity onPress={() => console.log('アカウント登録')}>
                                <Text style={styles.footerText}>アカウント登録はこちら</Text>
                            </TouchableOpacity>
                        </Link>
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
        backgroundColor: '#4285F4', // iOS用ステータスバーの背景色（濃い青）
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

export default LogIn;
