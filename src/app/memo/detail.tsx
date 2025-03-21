import { View, Text, StatusBar, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";

import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/icon";


const handlePress = () => {
    console.log('Press');

    router.push('/memo/edit');
};

const Detail = (): JSX.Element => {
    const memos = [
        { id: 1, title: '買い物リスト', date: '2020年12月24日 10:00', body: '今日は買い物に行くときに忘れないようにしたいことをメモしておきます。まず、スーパーでは牛乳と卵を必ず買うこと。また、今晩の夕食用に新鮮な野菜（特にトマトとほうれん草）を選んで購入する。お米が残り少なくなっていたので5キロの袋を一つ追加しておく。日用品ではティッシュペーパーと洗剤がそろそろ切れそうだったので、セール品を狙って買い置きをしておきたい。ついでにドラッグストアで歯磨き粉とシャンプーの予備も購入する。最近忙しくて疲れ気味だから、自分用のちょっとしたお菓子やコーヒーなど、息抜きになるものを一つ買っても良いかも。エコバッグを持参するのを絶対に忘れないように注意し、ポイントカードも念のため財布に入れておく。帰り道で銀行に立ち寄って、来週必要になるお金を下ろしておくのも忘れない。これだけ準備すれば安心して買い物ができそうだ。' },
    ];
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content" // アイコンの色（白）
            />
            {/* デモ用でosのチェックやモデルごとの高さの調整なし */}
            <SafeAreaView style={styles.container}>

                {/* メモリスト */}
                {/* 将来的にはデティール用のコンポーネントを作成する */}
                {memos.map(memo => (
                    <View key={memo.id} style={{ flex: 1 }}>
                        <MemoListItem {...memo} />
                        <ScrollView style={styles.memoBpdy}>
                            <Text style={styles.memoBodyText}>{memo.body}</Text>
                        </ScrollView>
                    </View>
                ))}
                <CircleButton onPress={handlePress} style={{ top: 40, bottom:"auto" }}>
                    <Icon name="pencil" size={40} color='#fff' />
                </CircleButton>
            </SafeAreaView>
        </View>
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
    memoList: {
        flex: 1,
    },
    memoBpdy: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText: {
        lineHeight: 24,
        fontSize: 16,
    },
});

export default Detail;