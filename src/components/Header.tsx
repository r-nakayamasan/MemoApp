import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      {/* <View style={styles.headerLeft} /> */}
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Text style={styles.logoutButton}>ログアウト</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4285F4',
    // flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // paddingVertical: 15,
    // paddingHorizontal: 20,
    height: 70,
  },
  // headerLeft: {
  //     width: 55,
  // },
  headerInner: {
    // flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '500',
    lineHeight: 32,
    marginBottom: 4,
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  logoutButton: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
});

export default Header;