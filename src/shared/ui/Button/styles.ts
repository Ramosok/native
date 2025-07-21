import { StyleSheet } from 'react-native';

import { Colors } from '@/lib/theme/colors';

export const backgroundColors = {
  primary: Colors.primary,
  outline: Colors.white,
  inverted: Colors.black,
  disabled: Colors.grayLight,
};

export const textColors = {
  primary: Colors.black,
  outline: Colors.black,
  inverted: Colors.white,
  disabled: Colors.white,
};

export const iconBackgroundColors = {
  primary: Colors.black,
  outline: Colors.black,
  inverted: Colors.white,
  disabled: Colors.white,
};

export const styles = StyleSheet.create({
  button: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 60,
    position: 'relative',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 22,
  },
  iconContainer: {
    position: 'absolute',
    right: 8,
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
