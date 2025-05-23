import { Link } from 'expo-router';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import mainImage from 'src/shared/assets/images/main.webp';

export default function Main() {
  return (
    <View style={styles.container}>
      <Image source={mainImage} style={styles.image} resizeMode="cover" />

      <View style={styles.buttonsContainer}>
        <Link href="/(drawer)/auth?type=register" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>

        <Link href="/(drawer)/auth?type=login" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    height: '70%',
    width: '100%',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
