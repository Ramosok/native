import React, { FC, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';
import { Controller } from 'react-hook-form';
import { View, Linking, Pressable } from 'react-native';

import { useLoginForm } from '@/features/auth/hooks/useLoginForm';
import { LoginSchemaData } from '@/features/auth/model/login.schema';
import { Colors } from '@/lib/theme/colors';
import { useLoginUserMutation } from '@/shared/api/user/login/loginUser.mutation';
import { Button, Input, Text } from '@/shared/ui';

import styles from './styles';

interface LoginProps {
  onForgotPassword: () => void;
}

export const Login: FC<LoginProps> = ({ onForgotPassword }) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useLoginForm();

  const { mutateAsync: login } = useLoginUserMutation();

  const onSubmit = async (data: LoginSchemaData) => {
    try {
      await login(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrivacyPolicyPress = () => {
    Linking.openURL('https://example.com/privacy-policy');
  };

  return (
    <>
      <Text style={styles.title}>Войти в аккаунт</Text>
      <Text style={styles.description}>Чтобы продолжить, введите электронную почту и пароль.</Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <Input
              placeholder="Электронная почта"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <Input
              placeholder="Пароль"
              secureTextEntry
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={error?.message}
            />
          )}
        />
        <Pressable onPress={onForgotPassword}>
          <Text style={styles.forgotPassword}>Забыли пароль?</Text>
        </Pressable>
      </View>

      <Button
        type="inverted"
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting || !isValid}
        icon={(color) => <Feather name="arrow-up-right" size={24} color={color} />}>
        Продолжить
      </Button>

      <Text style={styles.policyContainer}>
        Создавая аккаунт, вы соглашаетесь с{' '}
        <Text onPress={handlePrivacyPolicyPress} accessibilityRole="link" style={styles.policyText}>
          Политикой конфиденциальности
        </Text>
        .
      </Text>
    </>
  );
};
