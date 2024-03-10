import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText } from 'react-native-paper';
import CategoryDropdown from '../../../components/category-dropdown';
import { Excuse, ExcuseOutput } from '../../../components/excuse-output';

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 100,
    },
    dropdownButtonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      flex: 0,
      alignItems: 'center',
    },
    button: {
      justifyContent: 'center',
    },
  });

  const [category, setCategory] = useState<string>()
  const [excuse, setExcuse] = useState<Excuse>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchExcuse = async (category: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://excuser-three.vercel.app/v1/excuse/${category}`)
      const data = await response.json()
      setExcuse(data[0])
    }
    catch (error) {
      console.error(error)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.dropdownButtonRow}>
        <CategoryDropdown value={category} setValue={setCategory} />
        <Button disabled={category === undefined || category === null || category === ""} style={styles.button} icon="lightning-bolt-outline" mode="outlined" onPress={() => fetchExcuse(category as string)}>Get an excuse</Button>
      </View>
      <HelperText type="error" visible={true}>Select a category and press the button to get an excuse</HelperText>
      <ExcuseOutput excuse={excuse} isLoading={isLoading} />
    </View>
  );
}
