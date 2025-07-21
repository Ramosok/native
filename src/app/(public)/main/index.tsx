import { Feather } from '@expo/vector-icons';
import { useMachine } from '@xstate/react';
import { Link } from 'expo-router';
import { View, Pressable, Image } from 'react-native';

import { AuthModal } from '@/features/auth/ui/AuthModal';
import { authModalMachine } from '@/features/auth/ui/AuthModal/authModalMachine';
import { Colors } from '@/lib/theme/colors';
import { useSignInWithGoogle } from '@/shared/api/user/SignInWithGoogle/signInWithGoogle.mutation';
import { Button, Text } from '@/shared/ui';
import { MainWrapper } from '@/shared/wrappers/MainWrapper';
import googleIcon from 'src/shared/assets/images/google.png';

import styles from './styles';

const Main = () => {
  const [state, send] = useMachine(authModalMachine);

  const { mutateAsync } = useSignInWithGoogle();

  const isModalVisible = state.matches('signup') || state.matches('login');

  const handleLogIn = (): void => {
    send({ type: 'OPEN_LOGIN' });
  };

  const handleSignUp = (): void => {
    send({ type: 'OPEN_SIGNUP' });
  };

  const handleGoogleLogin = (): void => {
    mutateAsync();
  };

  return (
    <>
      <MainWrapper>
        <View style={styles.headerContainer}>
          <Text style={styles.vandrounik}>vandrounik.</Text>
          <Link style={styles.link} href="./home">
            <Text style={styles.skip}>Пропустить</Text>
          </Link>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Твое путешествие начинается здесь!</Text>
            <Text style={styles.description}>
              Создавай уникальные маршруты, выбирай интересные места и находи попутчиков
              для совместных путешествий.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              type="primary"
              onPress={handleSignUp}
              icon={() => <Feather name="arrow-up-right" size={24} color={Colors.white} />}>
              Создать аккаунт
            </Button>

            <Button
              type="outline"
              onPress={handleGoogleLogin}
              icon={() => <Image source={googleIcon} style={{ width: 24, height: 24 }} />}>
              Войти с Google
            </Button>
          </View>

          <View style={styles.enterContainer}>
            <Text style={styles.text}>Есть аккаунт?</Text>
            <Pressable onPress={handleLogIn} android_ripple={{ color: '#ccc', borderless: true }}>
              {({ pressed }) => (
                <Text style={[styles.enter, pressed && styles.linkPressed]}>Войти</Text>
              )}
            </Pressable>
          </View>
        </View>
      </MainWrapper>
      <AuthModal state={state} send={send} visible={isModalVisible} />
    </>
  );
};

export default Main;
