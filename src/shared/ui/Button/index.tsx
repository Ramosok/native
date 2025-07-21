import { FC, PropsWithChildren, ReactNode } from 'react';

import { GestureResponderEvent, ViewStyle, StyleProp, View, Pressable } from 'react-native';

import { Colors } from '@/lib/theme/colors';
import {
  backgroundColors,
  iconBackgroundColors,
  styles,
  textColors,
} from '@/shared/ui/Button/styles';

import { Text } from '../Text';

type ButtonType = 'primary' | 'outline' | 'inverted';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  icon: (color: string) => ReactNode;
  type?: ButtonType;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onPress,
  icon,
  type = 'primary',
  style,
  disabled = false,
}) => {
  const iconColor = disabled ? Colors.grayLight : Colors.black;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColors[disabled ? 'disabled' : type],
        },
        style,
      ]}>
      <Text style={[styles.text, { color: textColors[disabled ? 'disabled' : type] }]}>
        {children}
      </Text>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: iconBackgroundColors[disabled ? 'disabled' : type],
          },
        ]}>
        {icon(iconColor)}
      </View>
    </Pressable>
  );
};
