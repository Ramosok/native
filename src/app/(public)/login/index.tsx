import React, { FC } from 'react';

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import { Button, Image, StyleSheet, View } from 'react-native';

import { authStore } from '@/lib/stores/auth';
import mainImage from 'src/shared/assets/images/main.webp';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_WEB_ID,
  scopes: ['profile', 'email'],
  offlineAccess: true,
  forceCodeForRefreshToken: false,
});

const GoogleLogin = async () => {
  await GoogleSignin.hasPlayServices();

  return await GoogleSignin.signIn();
};

const googleSignIn = async () => {
  try {
    const response = await GoogleLogin();

    const { idToken, user } = response.data ?? {};
    if (idToken) {
      console.log(idToken, user);
    }
  } catch (error) {
    console.log('Error', error);
  }
};

const Login: FC = () => {
  const handleLogin = () => {
    authStore.getState().login({ id: '1', token: 'test' });
    router.navigate('/home');
  };

  return (
    <View>
      <Button onPress={handleLogin} title="Войти" />
      <Image source={mainImage} style={styles.image} resizeMode="cover" />
      <View style={styles.blackBackground}>
        <GoogleSigninButton onPress={googleSignIn} />
      </View>
    </View>
  );
};

export default Login;

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
});
