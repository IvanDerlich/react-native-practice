import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.textText}>Another text</Text>
      </View>
      <Text style={styles.textText}>
        Lalalala
        </Text>
      <Button title="Press me" onPress={() => alert('Button pressed')} />
      <StatusBar 
        style="auto" 
      // barStyle="light-content" backgroundColor="blue"
      />
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
  textText: {
    color: 'red',
    margin: 20,
    borderWidth: 2,
    borderColor: 'green',
    padding: 16
  }
});
