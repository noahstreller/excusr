import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import Header from '../components/header';

export default function RootLayout(){
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Header />
      <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
      </Stack>
    </PaperProvider>
  )
}