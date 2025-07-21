import { TextStyle, ViewStyle } from 'react-native';

import { Colors } from '@/lib/theme/colors';

type Key = 'default' | 'error' | 'focus';
type Value = TextStyle & ViewStyle;

const inputBorderStyles = new Map<Key, Value>([
  ['default', { borderColor: Colors.grayLight }],
  ['error', { borderColor: Colors.red }],
  ['focus', { borderColor: Colors.black500 }],
]);

export const getInputBorder = ({ error, focus }: { [key in Key]?: string | boolean }) => {
  switch (true) {
    case Boolean(error):
      return inputBorderStyles.get('error');
    case Boolean(focus):
      return inputBorderStyles.get('focus');
    default:
      return inputBorderStyles.get('default');
  }
};
