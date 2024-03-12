import { StyleSheet } from "react-native";
import { Icon, Surface, Text, useTheme } from "react-native-paper";

export function NotNewBanner({notnew = true}: {notnew: boolean}){
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ff8888",
      flex: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 20,
      padding: 20,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    },
    containernew: {
      backgroundColor: "#88cc88",
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
    <>
      {notnew ? (
        <Surface mode="flat" elevation={5} style={styles.container}>
          <Icon
            color={theme.colors.background}
            source="alert-outline"
            size={24}
          />
          <Text style={{ color: theme.colors.background, maxWidth: "80%" }}>
            This excuse has already been used
          </Text>
        </Surface>
      ) : (
        <Surface mode="flat" elevation={5} style={styles.containernew}>
          <Icon color={theme.colors.background} source="check" size={24} />
          <Text style={{ color: theme.colors.background, maxWidth: "80%" }}>
            This excuse has not been used
          </Text>
        </Surface>
      )}
    </>
  );
} 