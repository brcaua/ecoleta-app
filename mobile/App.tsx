import React from "react";
import Routes from './src/routes'
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import {Inter_400Regular, Inter_500Medium, Inter_700Bold} from '@expo-google-fonts/inter'
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
