import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Surface, Text } from "react-native-paper";
import { Blockquote } from "./blockquote";

export function ExcuseOutput({excuse, isLoading}: {excuse: Excuse, isLoading: boolean}) {
  const styles = StyleSheet.create({
    output: {
      borderRadius: 20,
      padding: 8,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    shrug: {
      textAlign: 'center',
      color: '#777777',
    },
  });

  return (
    <Surface style={styles.output} elevation={1} mode='flat'>
      {
        isLoading ?
        <ActivityIndicator animating={true} color="#000" /> : 
        (
          excuse ?
          <Blockquote category={excuse.category}>{excuse.excuse}</Blockquote> :
          (
            <View>
              <Text style={styles.shrug} variant="displayMedium">¯\_(ツ)_/¯</Text>
              <Text style={styles.shrug} variant="headlineMedium">No excuses so far</Text>
            </View>
          )
        )
      }
    </Surface>
  );
}

export type Excuse = {
  id: number;
  excuse: string;
  category: string;
}