import { 
    View, StatusBar, SafeAreaView, StyleSheet, KeyboardAvoidingView 
} from "react-native";

import React, { useState } from "react";

import Header from "../../components/Header";
import AuthForm from "../../components/AuthForm";

const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // サインアップ処理をここに実装
        console.log('サインアップ処理:', email, password);
    };

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.statusBarBackground} />
            <SafeAreaView style={styles.container}>
                <Header />
                <AuthForm
                    title="Sign Up"
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    buttonText="作成"
                    onSubmit={handleSignUp}
                    footerLinks={[
                        // ログに出力するだけの仮実装
                        { text: 'すでにアカウントをお持ちの方はこちら', onPress: () => console.log('ログイン') },
                        { text: '利用規約とプライバシーポリシー', onPress: () => console.log('利用規約') },
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
        backgroundColor: '#4285F4',
    },
});

export default SignUp;
