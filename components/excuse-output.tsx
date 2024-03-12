import { StyleSheet, View } from "react-native";
import { ActivityIndicator, Surface, Text, useTheme } from "react-native-paper";
import { Excuse } from "../lib/types";
import { Blockquote } from "./blockquote";

export function ExcuseOutput({excuse, isLoading}: {excuse: Excuse | null, isLoading: boolean}) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    output: {
      borderRadius: 20,
      paddingVertical: 20,
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
        <ActivityIndicator animating={true} color={theme.colors.onSurface} /> : 
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