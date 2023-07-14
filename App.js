import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Pane, Text, Heading } from 'evergreen-ui';
import {FollowerChart} from './components/FollowerChart';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pane height={60} width={240} display="flex" alignItems="center" justifyContent="center" border="default">
        <Heading>Rogue Heart Cosplay</Heading>
      </Pane>
      <FollowerChart />     
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
