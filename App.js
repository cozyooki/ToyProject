import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.allcontainer}>
      <View style={styles.header}>
        <Header1></Header1>
        <Header2></Header2>
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Content1></Content1>
          <Content2></Content2>
          <Content3></Content3>
        </ScrollView>
      </View>
      <Footer></Footer>
    </View>
  );
}

const Header1 = () => {
  return (
    <View style={styles.header1}>
      <Text>header1</Text>
    </View>
  )
};
const Header2 = () => {
  return (
    <View style={styles.header2}>
      <Text>header2</Text>
    </View>
  )
};
const Content1 = () => {
  return (
    <View style={styles.content1}>
      <Text>content1</Text>
    </View>
  )
};
const Content2 = () => {
  return (
    <View style={styles.content2}>
      <Text>content2</Text>
    </View>
  )
};
const Content3 = () => {
  return (
    <View style={styles.content3}>
      <Text>content3</Text>
    </View>
  )
};
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>footer</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollview: {
    flex: 1,
    width: '100%'
  },
  header1: {
    position: 'absolute',
    top: 20,
    width: '100%',
    height: 50,
    backgroundColor: 'red'
  },
  header2: {
    position: 'absolute',
    top: 70,
    width: '100%',
    height: 80,
    backgroundColor: 'orange'
  },
  content1: {
    width: '100%',
    height: '20%',
    backgroundColor: 'yellow'
  },
  content2: {
    width: '100%',
    height: '50%',
    backgroundColor: 'green'
  },
  content3: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue'
  },
  footer: {
    width: '100%',
    height: 80,
    backgroundColor: 'purple'
  },
});
