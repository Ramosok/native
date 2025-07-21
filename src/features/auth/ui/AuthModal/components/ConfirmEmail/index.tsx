import React, { FC } from 'react';

import { Feather, Ionicons } from '@expo/vector-icons';
import { View, Pressable } from 'react-native';

import { Colors } from '@/lib/theme/colors';
import { Button, SmartOTPInput, Text } from '@/shared/ui';
import { CountDown } from 'src/shared/components/CountDown';

import styles from './styles';

interface ConfirmEmailProps {
  onBack: () => void;
  email: string;
}

export const ConfirmEmail: FC<ConfirmEmailProps> = ({ onBack, email }) => {
  return (
    <View style={styles.wrapper}>
      <Pressable hitSlop={styles.hitSlop} onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color={Colors.grayDark} />
      </Pressable>
      <Text style={styles.title}>Проверьте почту</Text>
      <Text style={styles.description}>
        Мы выслали вам на почту письмо для подтверждения. Если вы его не видите, проверьте папку
        «Спам».
      </Text>
      <View style={styles.optContainer}>
        <SmartOTPInput />
      </View>

      <CountDown countStorageKey={email} styleContainer={styles.countDown}>
        {({ secondsLeft, isComplete, resetTimer }) => {
          return (
            <>
              <Button
                disabled={isComplete}
                style={styles.nextBtn}
                type="inverted"
                onPress={() => console.info(`nextBtn`)}
                icon={(color) => <Feather name="arrow-up-right" size={24} color={color} />}>
                Подтвердить
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
