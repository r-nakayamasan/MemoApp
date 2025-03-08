import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';

import Header from '../components/Header';
import MemoListItem from '../components/MemoListItem';
import CircleButton from '../components/CircleButton';

const Index = () => {
  const memos = [
    { id: 1, title: '買い物リスト', date: '2020年12月24日 10:00' },
    { id: 2, title: 'やることリスト', date: '2020年12月24日 10:00' },
    { id: 3, title: 'アイデア', date: '2020年12月24日 10:00' },
    { id: 4, title: 'Udemyの進捗', date: '2020年12月24日 10:00' },
    { id: 5, title: 'いきたいところ', date: '2020年12月24日 10:00' },
    { id: 6, title: '10月の計画', date: '2020年12月24日 10:00' },
    { id: 7, title: '正月の予定', date: '2020年12月24日 10:00' },
    { id: 8, title: '来年の目標', date: '2020年12月24日 10:00' },
    { id: 9, title: 'プログラミング学習進捗', date: '2020年12月24日 10:00' },
    { id: 10, title: '12月の予算', date: '2020年12月24日 10:00' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content" // アイコンの色（白）
      />
      {/* ステータスバーの背景色、デモ用でosのチェックやモデルごとの高さの調整なし */}
      <View style={styles.statusBarBackground} />
      <SafeAreaView style={styles.container}>
        {/* ヘッダー */}
        <Header />
        {/* メモリスト */}
        <ScrollView style={styles.memoList}>
          {/* todoの一覧を取得 */}
          {memos.map(memo => (
            <MemoListItem key={memo.id} {...memo} />
          ))}
        </ScrollView>
        {/* 追加ボタン */}
        <CircleButton />
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
});


export default Index;

