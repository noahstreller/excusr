import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}