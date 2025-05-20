import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import mainImage from 'src/shared/assets/images/main.webp';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '450615607176-ga12macv1ee5u83u0n6dqsle7i9n4bam.apps.googleusercontent.com',
  offlineAccess: true,
});

export default function Index() {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Пользователь отменил вход');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Уже есть активный процесс входа');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services недоступны');
      } else {
        console.error('Ошибка входа:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={mainImage} style={styles.image} resizeMode="cover" />

      <View style={styles.blackBackground}>
        <TouchableOpacity style={styles.googleButton} onPress={signIn}>
          <Text style={styles.buttonText}>Войти через Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: '100%',
  },
  blackBackground: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  googleButton: {
    backgroundColor: '#DB4437',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
