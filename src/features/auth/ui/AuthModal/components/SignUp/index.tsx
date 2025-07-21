import React, { FC } from 'react';

import { Feather } from '@expo/vector-icons';
import { Controller } from 'react-hook-form';
import { View, Linking } from 'react-native';

import { useSignUpForm } from '@/features/auth/hooks/useSignUpForm';
import { SignUpFormData } from '@/features/auth/model/signUp.schema';
import { useCreateUsersMutation } from '@/shared/api/user/createUser/createUser.mutation';
import { Button, Input, Text } from '@/shared/ui';

import styles from './styles';

interface SignUpProps {
  onSendData: (email: string) => void;
}

export const SignUp: FC<SignUpProps> = ({ onSendData }) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useSignUpForm();

  const { mutateAsync: createUser } = useCreateUsersMutation();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await createUser({
        email: data.email,
        password1: data.password,
        password2: data.confirmPassword,
      });
      onSendData(data.email);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrivacyPolicyPress = () => {
    Linking.openURL('https://example.com/privacy-policy');
  };

  return (
    <>
      <Text style={styles.title}>Создать аккаунт</Text>
      <Text style={styles.description}>
        Чтобы продолжить, введите электронную почту и придумайте пароль.
      </Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <Input
              containerStyle={styles.email}
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

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <Input
              placeholder="Подтвердите пароль"
              secureTextEntry
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={error?.message}
            />
          )}
        />
      </View>

      <Button
        type="inverted"
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
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
