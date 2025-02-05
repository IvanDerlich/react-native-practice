import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text>Another text</Text>
      </View>
      <Text style={{color: 'red'}}>
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
});
