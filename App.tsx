import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Home } from './src/screens/Home';
import { theme } from './src/global/theme';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {
          fontsLoaded 
          ? <Home /> 
          : <Loading />
        }
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
