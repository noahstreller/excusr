import { StyleSheet } from "react-native";
import { Icon, Surface, Text } from "react-native-paper";

export function NotNewBanner({notnew = true}: {notnew: boolean}){
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ffbbbb",
      flex: 0,
      flexDirection: "row",
      justifyContent: "space-evenly",
      padding: 20,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    },
    containernew: {
      backgroundColor: "#bbffbb",
      flex: 0,
      flexDirection: "row",
      justifyContent: "space-evenly",
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
          <Icon source="alert-outline" size={24} />
          <Text>This excuse has already been used</Text>
        </Surface>
      ) : (
        <Surface mode="flat" elevation={5} style={styles.containernew}>
          <Icon source="check" size={24} />
          <Text>This excuse has not been used</Text>
        </Surface>
      )}
    </>
  );
} 