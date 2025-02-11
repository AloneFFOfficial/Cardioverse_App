import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React from 'react';


export default function PatientLogin() {
  return (
    <View>
      <Text>Welcome Back</Text>
        <Text style={styles.font16}>Email</Text>
        <TextInput placeholder='Email' type='username' style={styles.TextInput}> </TextInput>
        <Text style={styles.font16}>password</Text>
        <TextInput placeholder='Password' type='password' style={styles.TextInput}> </TextInput>
        <Button title='Sign In' />
        <Text>Already have a Account?</Text> <Button title='Log In' onPress={() => {}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
      flex:1, 
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor:'#FFDFD9'
    },
    TextInput: {
      backgroundColor: 'white',
      padding: 10,
      width: 200,
      height: 40,
      marginBottom: 10,
      color: 'black',
    },
    font16:{
      fontSize: 16
    },
    font36:{
      fontSize: 36
    }
});