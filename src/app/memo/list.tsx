import { useEffect } from 'react';
import { 
  View, ScrollView, StyleSheet, SafeAreaView, 
  StatusBar, Platform, TouchableOpacity, Text
} from 'react-native';

import MemoListItem from '../../components/MemoListItem';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/icon';
import { router, useNavigation } from 'expo-router';

const handlePress = () => {
  console.log('Press');

  router.push('/memo/newCreate');
};

const List = () => {
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

  const navigation = useNavigation();
  useEffect(() => {
    // コンポーネントライフサイクル: コンポーネントがマウントされた後に実行される
    // 空の依存配列[]を指定しているため、コンポーネントの初回レンダリング時に1回だけ実行される
    // このタイミングでナビゲーションのヘッダー右側にログアウトボタンを動的に追加している
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerRight}>
          <Text style={styles.logoutButton}>ログアウト</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content" // アイコンの色（白）
      />
      {/* デモ用でosのチェックやモデルごとの高さの調整なし */}
      <SafeAreaView style={styles.container}>
        {/* メモリスト */}
        <ScrollView style={styles.memoList}>
          {/* todoの一覧を取得 */}
          {memos.map(memo => (
            <TouchableOpacity onPress={() => router.push('/memo/detail')} key={memo.id}>
              <MemoListItem {...memo} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* 追加ボタン */}
        <CircleButton onPress={handlePress}>
          <Icon name="plus" size={40} color='#fff' />
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
  headerRight: {
    marginRight: 8,
  },
  logoutButton: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    lineHeight: 32,
  },
});


export default List;

