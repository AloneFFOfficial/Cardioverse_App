import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Cardioverse</Text>
      <Text style={styles.subtitle}>Your Cardiologist home</Text>

      <Text style={styles.question}>Who are you?</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/DoctorLogin')}>
        <Image source={require('../assets/images/doctor.png')} style={styles.icon} />
        <Text style={styles.buttonText}>I Am A Doctor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/PatientLogin')}>
        <Image source={require('../assets/images/patient.png')} style={styles.icon} />
        <Text style={styles.buttonText}>I Am A Patient</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDFD9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '400',
    color: '#000',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 8,
    width: 250,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
