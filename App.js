import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="hello-text">Hello, Orchestra!</Text>
      <Text testID="future-text" style={styles.futureText}>This is the future</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  futureText: {
    color: 'green',
    marginTop: 8,
  },
});
