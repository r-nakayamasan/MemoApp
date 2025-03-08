import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  style?: TextStyle;
}

const Hello = (props: Props): JSX.Element => {
  const {children, bang, style} = props;
  return (
    <View>
      <Text style={[styles.Text, style]}>
        Hello World! {children}{bang === true ? '!' : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    padding: 16,
    fontWeight: 'bold',
  },
});

export default Hello;