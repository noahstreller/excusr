import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ToggleSwitch from "./toggle-switch";
import { cloneElement } from "react";
import { Icon } from "react-native-paper";
import { FullWindowOverlay } from "react-native-screens";

export default function SettingsItem({title, toggleAction,hint}: {toggleAction:Function,title:string,hint?:string}) {
  const styles = StyleSheet.create({
    container: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      width: '100%',
      height: 40,
      alignItems: 'center'
    },
    settingsItemTitle: {
      fontSize: 20,
      fontWeight: '500'
    },
    settingsItemTitleIcon: {
        paddingLeft: 10,
       
    }
  });
  function infoAction() {
    console.log("INFO ACTION")  
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.settingsItemTitle}>{title}
        {
            hint&&
            <View style={styles.settingsItemTitleIcon}>
                <TouchableOpacity onPress={infoAction}>
                    <Icon size={15}source={"information-outline"}></Icon>
                </TouchableOpacity>
            </View>
        }
      </Text>
      
      <ToggleSwitch toggleAction={toggleAction} />
    </View>
  );
}
