import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";
import ToggleSwitch from "./toggle-switch";

export default function SettingsItem({ title, toggleAction, hint, value }: { toggleAction: Function, title: string, hint?: string, value: boolean }) {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      height: 40,
      alignItems: "center",
    },
    settingsItemTitle: {
      fontSize: 20,
      fontWeight: "500",
    },
    settingsItemTitleIcon: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: theme.colors.background,
      padding: 40,
      borderRadius: 10,
      width: "80%",
    },
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
            <Icon size={16} source={"information-outline"} />
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
            <Text>{hint}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
      <ToggleSwitch toggleAction={toggleAction} value={value} />
    </View>
  );
}
