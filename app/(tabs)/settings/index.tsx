import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../../components/header";
import SettingsItem from "../../../components/settings-item";
import { PreferencesContext } from "../../_layout";

export default function Settings() {
  const preferences = useContext(PreferencesContext);  
  
  function toggleDarkMode(){
    preferences.toggleTheme()
  }
  function toggleDuplicate(){
    preferences.toggleDuplicates()
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
          toggleAction={toggleDarkMode}
          title="Dark mode"
          value={preferences.darkMode}
        />
        <SettingsItem
          toggleAction={toggleDuplicate}
          title="Duplicates"
          hint="Enabling duplicates will disable automatic retries if the excuse has already been seen. The alert banner will still show up."
          value={preferences.duplicates}
        />
      </View>
    </>
  );
}
