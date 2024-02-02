import Peed from './app/screens/peed'
import Login from './app/screens/login'
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.allcontainer}>
      <Peed />
    </View>
  )
};

const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
  },
})