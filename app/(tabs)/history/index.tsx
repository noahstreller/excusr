import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Snackbar } from "react-native-paper";
import { ExcuseOutput } from "../../../components/excuse-output";
import Header from "../../../components/header";
import {
  clearHistory,
  getHistory,
  setHistoryFromArray,
} from "../../../lib/persistence";
import { Excuse } from "../../../lib/types";

export default function History({ navigation }: { navigation: any }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      gap: 24,
      paddingVertical: 24,
    },
  });

  const [backup, setBackup] = useState<Excuse[]>([]);
  const [history, setHistory] = useState<Excuse[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const refresh = async () => {
    const history = await getHistory();
    setHistory(history);
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      refresh();
    });
  }, [navigation]);

  return (
    <>
      <Header title="History">
        <Appbar.Action
          icon="refresh"
          onPress={() => {
            refresh();
          }}
        />
        <Appbar.Action
          icon="delete"
          onPress={() => {
            setVisible(true);
            if (history) setBackup([...history]);
            clearHistory();
            refresh();
          }}
        />
      </Header>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          {history?.map((excuse, index) => (
            <ExcuseOutput excuse={excuse} isLoading={false} key={index} />
          )) || <ExcuseOutput excuse={null} isLoading={false} />}
        </ScrollView>

        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Undo",
            onPress: () => {
              if (backup) {
                setHistory([...backup]);
                setHistoryFromArray(backup);
              }
            },
          }}
        >
          History deleted
        </Snackbar>
      </View>
    </>
  );
}
