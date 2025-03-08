import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface MemoItem {
    id: number;
    title: string;
    date: string;
}

const MemoListItem = (memo: MemoItem): JSX.Element => {
    // メモのサンプルデータ
    return (
        <View key={memo.id} style={styles.memoItem}>
            <View style={styles.memoContent}>
                <Text style={styles.memoTitle}>{memo.title}</Text>
                <Text style={styles.memoDate}>{memo.date}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
        // marginBottom: 5,
        lineHeight: 32,
    },
    memoDate: {
        fontSize: 12,
        color: '#888',
        lineHeight: 16,
    },
    deleteButton: {
        padding: 5,
    },
    deleteButtonText: {
        fontSize: 18,
        color: '#aaa',
    },
});

export default MemoListItem;