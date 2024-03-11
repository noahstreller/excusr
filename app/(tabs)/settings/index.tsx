import { StyleSheet, View } from "react-native";
import Header from "../../../components/header";
import SettingsItem from "../../../components/settings-item";

export default function Settings() {
  function togglelightMode(){
    console.log("lightMode")
  }
  function toggleDuplicate(){
    console.log("duplicate")
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection: 'column', 
      alignItems: 'flex-start',
      rowGap: 20
    },
  });

  return (
    <>
      <Header title="Settings" />
      <View style={styles.container}>
        <SettingsItem 
          toggleAction={togglelightMode}
          title="Light mode"
        />
        <SettingsItem 
          toggleAction={toggleDuplicate}
          title="Duplicates"
          hint="Hint"
        />
      </View>
    </>
  );
}
