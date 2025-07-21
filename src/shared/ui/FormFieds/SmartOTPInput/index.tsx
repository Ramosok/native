import { FC, useState, useRef, useEffect } from 'react';

import { TextInput, View, Platform } from 'react-native';

import { getInputBorder } from '@/shared/ui/FormFieds/utils/getInputBorder';

import styles from './styles';

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  autoFocus?: boolean;
  error?: string;
}

export const SmartOTPInput: FC<OTPInputProps> = ({
  length = 5,
  onComplete,
  error,
  autoFocus = true,
}) => {
  const [otp, setOtp] = useState<string>('');

  const inputsRef = useRef<(TextInput | null)[]>([]);

  const focusInput = (index: number) => {
    if (inputsRef.current[index]) {
      inputsRef.current[index]?.focus();
    }
  };

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) {
      const newOtp = text.slice(0, length);
      setOtp(newOtp);

      for (let i = 0; i < length; i++) {
        inputsRef.current[i]?.setNativeProps({ text: newOtp[i] || '' });
      }

      const nextIndex = Math.min(newOtp.length, length - 1);
      if (nextIndex < length - 1) {
        focusInput(nextIndex + 1);
      }
    }

    const newOtp = otp.slice(0, index) + text + otp.slice(index + 1, length);
    setOtp(newOtp);

    if (text && index < length - 1) {
      focusInput(index + 1);
    }

    if (newOtp.length === length) {
      onComplete?.(newOtp);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      focusInput(0);
    }
  }, [autoFocus]);

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, idx) => (
        <TextInput
          key={idx}
          value={otp[idx] || ''}
          onChangeText={(text) => handleChange(text, idx)}
          keyboardType="number-pad"
          maxLength={1}
          ref={(ref) => {
            inputsRef.current[idx] = ref;
          }}
          style={[styles.input, getInputBorder({ error, focus: Boolean(otp[idx]) })]}
          returnKeyType="done"
          textContentType="oneTimeCode"
          autoComplete={Platform.OS === 'android' ? 'sms-otp' : 'one-time-code'}
          importantForAutofill="yes"
          contextMenuHidden={true}
          selectTextOnFocus={true}
        />
      ))}
    </View>
  );
};
