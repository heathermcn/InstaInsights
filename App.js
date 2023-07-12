import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Pane, Text, majorScale, Heading } from 'evergreen-ui';
import { FollowerChart } from './FollowerChart';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <Pane height={60} width={240} display="flex" alignItems="center" justifyContent="center" border="default">
        <Heading>Rogue Heart Cosplay</Heading>
      </Pane>
      <Pane height={600} width={1200} display="flex" alignItems="center" justifyContent="center" border="default">
        <FollowerChart/>
      </Pane>
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
