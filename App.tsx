import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SingIn }   from './src/screens/SingIn';

export default function App() {
  return (
    <SingIn />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1A31',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
