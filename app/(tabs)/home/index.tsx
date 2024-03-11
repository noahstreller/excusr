import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, HelperText } from "react-native-paper";
import CategoryDropdown from "../../../components/category-dropdown";
import { Excuse, ExcuseOutput } from "../../../components/excuse-output";
import Header from "../../../components/header";
import { NotNewBanner } from "../../../components/notnewbanner";
import { addHistory } from "../../../lib/persistence";

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 25,
    },
    dropdownButtonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
      flex: 0,
      alignItems: "center",
    },
    button: {
      marginTop: 6,
      justifyContent: "center",
    },
    error: {
      textAlign: "center",
    },
    outputWrapper: {
      gap: 24,
      width: "100%",
      alignItems: "center",
    }
  });

  const [category, setCategory] = useState<string>();
  const [excuse, setExcuse] = useState<Excuse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [excuseNotNew, setExcuseNotNew] = useState<boolean>(false);

  const fetchExcuse = async (category: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://excuser-three.vercel.app/v1/excuse/${category}`
      );
      const data = await response.json();
      setExcuse(data[0]);
      let addedNew = await addHistory(data[0]);
      setExcuseNotNew(!addedNew);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View>
          <View style={styles.dropdownButtonRow}>
            <CategoryDropdown value={category} setValue={setCategory} />
            <Button
              disabled={
                category === undefined || category === null || category === ""
              }
              style={styles.button}
              icon="lightning-bolt-outline"
              mode="outlined"
              onPress={() => fetchExcuse(category as string)}
            >
              Get an excuse
            </Button>
          </View>
          <HelperText style={styles.error} type="error" visible={error}>
            There was an issue getting your excuse.
          </HelperText>
        </View>
        <View style={styles.outputWrapper}>
          {excuse && <NotNewBanner notnew={excuseNotNew} />}
          <ExcuseOutput excuse={excuse} isLoading={isLoading} />
        </View>
      </View>
    </>
  );
}
