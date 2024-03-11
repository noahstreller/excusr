import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useMemo, useState } from 'react';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { getPreferences, setPreferences } from '../lib/persistence';


export const PreferencesContext = createContext<{
  toggleTheme: () => void;
  toggleDuplicates: () => void;
} | null>(null);


export default function RootLayout(){
  const [darkMode, setIsDarkMode] = useState<boolean>(false);
  const [duplicates, setDuplicates] = useState<boolean>(false);

  const preferences = useMemo(
    () => ({
      toggleTheme: () => setIsDarkMode((oldValue) => !oldValue),
      toggleDuplicates: () => setDuplicates((oldValue) => !oldValue),
    }),
    [darkMode, duplicates]
  );

  useEffect(() => {
    const restore = async () => {
      const userSettings = await getPreferences();
      setIsDarkMode(userSettings.darkMode);
      setDuplicates(userSettings.duplicates);
      console.log(userSettings);
    };
    restore();
  }, []);

  

  useEffect(() => {
    const save = async () => {
      if(darkMode === undefined || duplicates === undefined) return
      let current = {
        darkMode: darkMode,
        duplicates: duplicates,
      };
      console.log("Current ", current);
      await setPreferences(current);
    };
    save();
  });

  const combinedTheme = darkMode ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={combinedTheme}>
      <PreferencesContext.Provider value={preferences}>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </PreferencesContext.Provider>
    </PaperProvider>
  );
}