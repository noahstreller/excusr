import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { ExcuseOutput } from "../../../components/excuse-output";
import Header from "../../../components/header";
import { clearHistory, getHistory } from "../../../lib/persistence";
import { Excuse } from "../../../lib/types";

export default function History({navigation}: {navigation: any}) {
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

  const [history, setHistory] = useState<Excuse[]>();

  const refresh = async () => {
    (async () => {
      const history = await getHistory();
      setHistory(history);
    })();
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
      </View>
    </>
  );
}
