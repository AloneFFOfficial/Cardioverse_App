import { View, Text, Image, Button} from 'react-native';
import React from 'react';
export default function Person() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFDFD9'}}>
        <Text style={{fontSize:36}}>Welcome To</Text>
        <Text style={{fontSize:36}}>Cardioverse</Text>
        <Text style={{fontSize:16}}>your Cardiologist home</Text>
        <Button onPress={() => {}} />
        <Button onPress={() => {}} />
    </View>
  );
};
