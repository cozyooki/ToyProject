import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { useState } from 'react'


export default function Login() {
  const [email,setEmail] = useState();
  const [password,setPass] = useState();
  const [displayname,setName] = useState();

  const onSignUp = async () => {
    try {
      const {user} = await signUp({email, password});
      Alert.alert('회원가입 성공')
    } catch (e) {
      Alert.alert('회원가입 실패');
    }
  };

  const onSignIn = async () => {
    try {
      const {user} = await signIn({email, password});
      Alert.alert('로그인 성공')
    } catch (e) {
      Alert.alert('로그인 실패');
    }
  };
  return (
    <View style={styles.allcontainer}>
      <View style={styles.container}>
        <Text>회원가입</Text>
        <TextInput
          onChangeText={setEmail}
          placeholder='email'
          placeholderTextColor={'black'}
          style={{borderColor: 'red'}}/>
        <TextInput
          onChangeText={setPass}
          placeholder='password'
          placeholderTextColor={'black'}
          style={{borderColor: 'red'}}/>
        <TextInput
          onChangeText={setName}
          placeholder='displayname'
          placeholderTextColor={'black'}
          style={{borderColor: 'red'}}/>
      </View>
      <View style={styles.container}>
        <Text>로그인</Text>
        <TextInput
          onChangeText={setEmail}
          placeholder='email'
          placeholderTextColor={'black'}
          style={{borderColor: 'red'}}/>
        <TextInput
          onChangeText={setPass}
          placeholder='password'
          placeholderTextColor={'black'}
          style={{borderColor: 'red'}}/>
        <TextInput
          onChangeText={setName}
          placeholder='displayname'
          placeholderTextColor={'black'}
          style={{borderColor: 'red'}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 10,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: 2,
  },
})