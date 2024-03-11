import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Dimensions } from "react-native";
import ToggleSwitch from "./toggle-switch";
import { Icon } from "react-native-paper";

export default function SettingsItem({ title, toggleAction, hint }: { toggleAction: Function, title: string, hint?: string }) {
  const [modalVisible, setModalVisible] = useState(false);

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
      flexDirection: 'row',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 40,
      borderRadius: 10,
      width: "80%"
    }
  });

  function infoAction() {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={infoAction}>
        <View style={styles.settingsItemTitleIcon}>
          <Text style={styles.settingsItemTitle}>{title}</Text>
          {hint &&
            <Icon size={15} source={"information-outline"} />
          }
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text>Enabling Duplicates makes it so that you get a Duplicate excuses will be marked.</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <ToggleSwitch toggleAction={toggleAction} />
    </View>
  );
}
