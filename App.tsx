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

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded 
        ? <Home /> 
        : <Loading />
      }
    </ThemeProvider>
  );
}
