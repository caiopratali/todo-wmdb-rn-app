import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { theme } from './src/global/theme';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar 
          barStyle="light-content" 
          backgroundColor={theme.colors.primary_900} 
        />

        {
          fontsLoaded 
          ? <Routes /> 
          : <Loading />
        }
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
