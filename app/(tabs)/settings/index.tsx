import { StyleSheet, Text, View } from "react-native";
import ToggleSwitch from "../../../components/toggle-switch";

export default function Settings() {
  function toggleActionTest(){
    console.log("You have activated the Toggle Switch")
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <ToggleSwitch toggleAction={()=>toggleActionTest()}/>
    </View>
  );
}