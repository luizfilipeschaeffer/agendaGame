import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import React, { Fragment } from 'react';
import { Backgrounds } from './src/components/Background';
import { SingIn } from './src/screens/SingIn';
import { Home } from './src/screens/home';

export default function App() {
  const [fontloded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });
  if (!fontloded) {
    return <AppLoading />
  }
  return (
    <Backgrounds>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SingIn />
    </Backgrounds>
  );
}