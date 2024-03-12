import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, HelperText } from "react-native-paper";
import CategoryDropdown from "../../../components/category-dropdown";
import { ExcuseOutput } from "../../../components/excuse-output";
import Header from "../../../components/header";
import { NotNewBanner } from "../../../components/notnewbanner";
import { TimeoutBanner } from "../../../components/timeoutbanner";
import { addHistory } from "../../../lib/persistence";
import { Excuse } from "../../../lib/types";
import { PreferencesContext } from "../../_layout";

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
    },
  });

  const [category, setCategory] = useState<string>();
  const [excuse, setExcuse] = useState<Excuse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [excuseNotNew, setExcuseNotNew] = useState<boolean>(false);
  const [limitReached, setLimitReached] = useState<boolean>(false);
  const [retries, setRetries] = useState<number>(0);
  
  const preferences = useContext(PreferencesContext);

  const fetchExcuse = async (category: string, retries: number = 0) => {
    setIsLoading(true);
    setLimitReached(false);
    setRetries(retries);

    try {
      const response = await fetch(
        `https://excuser-three.vercel.app/v1/excuse/${category}`
      );
      const data = await response.json();
      let addedNew = await addHistory(data[0]);

      if (!addedNew && retries < 100 && !preferences.duplicates) {
        fetchExcuse(category, retries + 1);
        return;
      } else {
        if (retries >= 100) setLimitReached(true);
        else setLimitReached(false);
        setExcuseNotNew(!addedNew);
        setExcuse(data[0]);
        setError(false);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
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
                category === undefined ||
                category === null ||
                category === "" ||
                isLoading
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
          {limitReached && <TimeoutBanner retries={retries} />}
          {!isLoading && excuse && <NotNewBanner notnew={excuseNotNew} />}
          <ExcuseOutput excuse={excuse} isLoading={isLoading} />
        </View>
        <HelperText style={styles.error} type="info" visible={!preferences.duplicates}>
          Retries: {retries}
        </HelperText>
      </View>
    </>
  );
}
