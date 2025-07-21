import React, { FC } from 'react';

import { Feather, Ionicons } from '@expo/vector-icons';
import { View, Pressable } from 'react-native';

import { useRecoverPassword } from '@/features/auth/hooks/useRecoverPassword';
import { RecoverPasswordSchemaSchemaData } from '@/features/auth/model/recoverPassword.schema';
import { Colors } from '@/lib/theme/colors';
import { useRecoverPasswordMutation } from '@/shared/api/user/recoverPassword/recoverPassword.mutation';
import { CountDown } from '@/shared/components/CountDown';
import { Button, Text } from '@/shared/ui';

import styles from './styles';

interface ResendLinkProps {
  onBack: () => void;
  email: string;
}

export const ResendLink: FC<ResendLinkProps> = ({ onBack, email }) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useRecoverPassword();

  const { mutateAsync: recoverPassword } = useRecoverPasswordMutation();

  const onSubmit = async (data: RecoverPasswordSchemaSchemaData) => {
    try {
      await recoverPassword(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Pressable hitSlop={styles.hitSlop} onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color={Colors.grayDark} />
      </Pressable>
      <Text style={styles.title}>Проверьте почту</Text>
      <Text style={styles.description}>
        {`Мы отправили ссылку на ${email} для восстановления пароля. Если письма нет во входящих, проверьте папку «Спам».`}
      </Text>
      <CountDown countStorageKey={email} styleContainer={styles.countDown}>
        {({ secondsLeft, isComplete, resetTimer }) => {
          return (
            <>
              <Button
                style={styles.button}
                type="inverted"
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting || !isComplete}
                icon={(color) => <Feather name="arrow-up-right" size={24} color={color} />}>
                Отправить заново
              </Button>
              {isComplete ? (
                <Pressable onPress={resetTimer}>
                  <Text style={styles.countDownText}>Повторить запрос</Text>
                </Pressable>
              ) : (
                <Text style={styles.countDownText}>
                  Новый код можно получить через 0:{secondsLeft}
                </Text>
              )}
            </>
          );
        }}
      </CountDown>
    </View>
  );
};
