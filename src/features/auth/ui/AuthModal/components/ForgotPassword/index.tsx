import React, { FC } from 'react';

import { Feather, Ionicons } from '@expo/vector-icons';
import { Controller } from 'react-hook-form';
import { View, Pressable } from 'react-native';

import { useRecoverPassword } from '@/features/auth/hooks/useRecoverPassword';
import { RecoverPasswordSchemaSchemaData } from '@/features/auth/model/recoverPassword.schema';
import { Colors } from '@/lib/theme/colors';
import { useRecoverPasswordMutation } from '@/shared/api/user/recoverPassword/recoverPassword.mutation';
import { Button, Input, Text } from '@/shared/ui';

import styles from './styles';

interface ForgotPasswordProps {
  onBack: () => void;
  onResendLink: (email: string) => void;
}

export const ForgotPassword: FC<ForgotPasswordProps> = ({ onBack, onResendLink }) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useRecoverPassword();

  const { mutateAsync: recoverPassword } = useRecoverPasswordMutation();

  const onSubmitRecoverPassword = async (data: RecoverPasswordSchemaSchemaData) => {
    try {
      await recoverPassword(data);
      onResendLink('reamo@tut.by');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Pressable hitSlop={styles.hitSlop} onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color={Colors.grayDark} />
      </Pressable>
      <Text style={styles.title}>Забыли пароль?</Text>
      <Text style={styles.description}>
        Введите электронную почту, указанную при регистрации, и мы отправим на неё ссылку
        для восстановления пароля.
      </Text>

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
      </View>
      <Button
        style={styles.button}
        type="inverted"
        onPress={handleSubmit(onSubmitRecoverPassword)}
        disabled={isSubmitting}
        icon={(color) => <Feather name="arrow-up-right" size={24} color={color} />}>
        Получить ссылку
      </Button>
    </View>
  );
};
