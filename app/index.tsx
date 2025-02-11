import { View, Text, Animated, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/Person');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.view}>
     <Text style={styles.font36}>Welcome To</Text>
     <Image source={require('../assets/images/logo.png')} style={styles.Image} />
     <Text style={styles.font36}>Cardioverse</Text>
     <Text style={styles.font16}>your Cardiologist home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'#FFDFD9'
  },
  font16:{
    fontSize: 16
  },
  font36:{
    fontSize: 36
  },
  Image:{
    width: 241,
    height: 222,
    borderRadius: 50
  }
});