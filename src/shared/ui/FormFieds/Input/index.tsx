import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { TextInput, TextInputProps, ViewStyle, View, Text, TouchableOpacity } from 'react-native';

import { Colors } from '@/lib/theme/colors';
import { getInputBorder } from '@/shared/ui/FormFieds/utils/getInputBorder';

import styles from './styles';

interface CustomInputProps extends TextInputProps {
  error?: string;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<CustomInputProps> = ({
  secureTextEntry,
  error,
  style,
  containerStyle,
  value,
  onChangeText,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isPassword = secureTextEntry;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputWrapper, getInputBorder({ error, focus: isFocused })]}>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
          style={[styles.input, style]}
          secureTextEntry={isPassword && !isVisible}
          placeholderTextColor={Colors.gray300}
          value={value}
          onChangeText={onChangeText}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={styles.icon}>
            <Ionicons name={isVisible ? 'eye' : 'eye-off'} size={20} color={Colors.grayDark} />
          </TouchableOpacity>
        )}
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
