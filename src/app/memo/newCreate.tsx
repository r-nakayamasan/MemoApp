import { 
    View, StatusBar, SafeAreaView, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView
} from "react-native";

import React from "react";
import { router } from "expo-router";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/icon";

const handlePress = () => {
    console.log('Press');

    // メモ詳細画面に遷移
    router.back();
};

const NewCreate = (): JSX.Element => {
    const [bodyText, setBodyText] = React.useState("");

    return (
        // KeyboardAvoidingViewでキーボードによる入力時のレイアウト変更を行う
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <StatusBar
                barStyle="light-content" // アイコンの色（白）
            />
            {/* デモ用でosのチェックやモデルごとの高さの調整なし */}
            <SafeAreaView style={styles.container}>
                {/* 将来的にはデティール用のコンポーネントを作成する */}
                {/* メモ編集エリア */}
                <View style={{ flex: 1 }}>
                    <ScrollView style={styles.memoBody}>
                        <TextInput
                            style={styles.memoBodyInput}
                            multiline  // ios用の設定
                            value={bodyText}
                            onChangeText={(text) => setBodyText(text)}
                        />
                    </ScrollView>
                </View>
                <CircleButton onPress={handlePress}>
                    <Icon name="check" size={40} color='#fff' />
                </CircleButton>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarBackground: {
        height: 60,
        backgroundColor: '#4285F4', // iOS用ステータスバーの背景色（濃い青）
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText: {
        lineHeight: 24,
        fontSize: 16,
    },
    memoBodyInput: {
        lineHeight: 24,
        fontSize: 16,
        textAlignVertical: 'top', // Android用の設定
    },
});

export default NewCreate;