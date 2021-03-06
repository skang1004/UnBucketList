import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

const SignUp = (props) => {
  let name;
  let email;
  let username;
  let password;
  let ConfirmPassword;

  return (
    <View style={styles.container}>
      <Text>Please enter information below</Text>
      <br></br>
      <TextInput
        onChangeText={(e) => {
          name = e;
        }}
        placeholder={'name'}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          email = e;
        }}
        placeholder={'email'}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          username = e;
        }}
        placeholder={'username'}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          password = e;
        }}
        placeholder={'password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          ConfirmPassword = e;
        }}
        placeholder={'ConfirmPassword'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          console.log(name);
          console.log(email);
          console.log(username);
          console.log(password);
          console.log(ConfirmPassword);
          props.navigation.navigate('Home');
        }}
      >
        <Text>Sign-Up!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default SignUp;
