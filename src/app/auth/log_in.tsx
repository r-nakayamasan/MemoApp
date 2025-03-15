import { 
    View, StatusBar, SafeAreaView, StyleSheet, KeyboardAvoidingView 
} from "react-native";

import React, { useState } from "react";

import Header from "../../components/Header";
import AuthForm from "../../components/AuthForm";

const LogIn = (): JSX.Element => {
    // ログイン情報の状態管理
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ログイン処理関数
    const handleLogin = () => {
        // ログイン処理をここに実装
        console.log('ログイン処理:', email, password);
    };

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <StatusBar
                barStyle="light-content" // アイコンの色（白）
            />
            {/* ステータスバーの背景色 */}
            <View style={styles.statusBarBackground} />
            <SafeAreaView style={styles.container}>
                {/* ヘッダー */}
                <Header />
                
                <AuthForm
                    title="Log In"
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    buttonText="ログイン"
                    onSubmit={handleLogin}
                    footerLinks={[
                        // ログに出力するだけの仮実装
                        { text: 'パスワードをお忘れですか？', onPress: () => console.log('パスワードリセット') },
                        { text: 'アカウント登録はこちら', onPress: () => console.log('アカウント登録') },
                    ]}
                />
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
});

export default LogIn;
