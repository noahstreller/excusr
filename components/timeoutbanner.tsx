import { StyleSheet } from "react-native";
import { Icon, Surface, Text, useTheme } from "react-native-paper";

export function TimeoutBanner({ retries }: { retries: number }) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ffaa55",
      flex: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 20,
      padding: 20,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    },
  });
  return (
    <Surface mode="flat" elevation={5} style={styles.container}>
      <Icon
        color={theme.colors.background}
        source="reload-alert"
        size={24}
      />
      <Text style={{ color: theme.colors.background, maxWidth: "80%" }}>
        There was no unique excuse after {retries} retries. You can toggle duplicates in the settings or delete the history.
      </Text>
    </Surface>
  );
}
