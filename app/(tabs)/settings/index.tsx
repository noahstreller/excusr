import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/header";

export default function Settings() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    </>
  );
}