import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const Index = () => {
  // メモのサンプルデータ
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* ヘッダー */}
      <View style={styles.header}>
        <View style={styles.headerLeft} />
        <Text style={styles.headerTitle}>Memo App</Text>
        <TouchableOpacity>
          <Text style={styles.logoutButton}>ログアウト</Text>
        </TouchableOpacity>
      </View>
      
      {/* メモリスト */}
      <ScrollView style={styles.memoList}>
        {/* todoの一覧を取得 */}
        {memos.map(memo => (
          <View key={memo.id} style={styles.memoItem}>
            <View style={styles.memoContent}>
              <Text style={styles.memoTitle}>{memo.title}</Text>
              <Text style={styles.memoDate}>{memo.date}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      
      {/* 追加ボタン */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>＋</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4285F4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerLeft: {
    width: 50,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  logoutButton: {
    color: '#fff',
    fontSize: 14,
  },
  memoList: {
    flex: 1,
  },
  memoItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  memoContent: {
    flex: 1,
  },
  memoTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  memoDate: {
    fontSize: 12,
    color: '#888',
  },
  deleteButton: {
    padding: 5,
  },
  deleteButtonText: {
    fontSize: 18,
    color: '#aaa',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android用シャドウ
    shadowColor: '#000', // iOS用シャドウ
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});


export default Index;
