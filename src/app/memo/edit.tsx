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

const Edit = (): JSX.Element => {
    const memos = [
        { id: 1, title: '買い物リスト', date: '2020年12月24日 10:00', body: '今日は買い物に行くときに忘れないようにしたいことをメモしておきます。まず、スーパーでは牛乳と卵を必ず買うこと。また、今晩の夕食用に新鮮な野菜（特にトマトとほうれん草）を選んで購入する。お米が残り少なくなっていたので5キロの袋を一つ追加しておく。日用品ではティッシュペーパーと洗剤がそろそろ切れそうだったので、セール品を狙って買い置きをしておきたい。ついでにドラッグストアで歯磨き粉とシャンプーの予備も購入する。最近忙しくて疲れ気味だから、自分用のちょっとしたお菓子やコーヒーなど、息抜きになるものを一つ買っても良いかも。エコバッグを持参するのを絶対に忘れないように注意し、ポイントカードも念のため財布に入れておく。帰り道で銀行に立ち寄って、来週必要になるお金を下ろしておくのも忘れない。これだけ準備すれば安心して買い物ができそうだ。' },
    ];

    // メモの内容を状態として管理
    const [bodyText, setBodyText] = React.useState(memos[0].body);

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

export default Edit;