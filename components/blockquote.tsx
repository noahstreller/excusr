import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export function Blockquote({children, category}: {children: string, category: string}) {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: 24,
    },
    blockquote: {
      fontSize: 24,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    textAlignCenter: {
      textAlign: 'center',
    },
    authorText: {
      textAlign: 'center',
      fontStyle: 'italic',
    },
    categoryText: {
    },
  });
  return (
    <View style={styles.container}>
      <Text>{category.toLocaleUpperCase()}</Text>
      <Text style={styles.textAlignCenter}>
        <Icon source="format-quote-open" size={28} />
        <Text style={styles.blockquote}>{children}</Text>
        <Icon source="format-quote-close" size={28} />
      </Text>
      <Text style={styles.authorText}>- Someone, probably</Text>
    </View>
  );
}