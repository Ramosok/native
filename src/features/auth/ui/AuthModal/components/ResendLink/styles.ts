import { StyleSheet } from 'react-native';

import { Colors } from '@/lib/theme/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 24,
    flex: 1,
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },

  countDown: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },

  title: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },

  description: {
    color: Colors.gray300,
    paddingVertical: 16,
    flex: 1,
  },

  button: {
    width: '100%',
  },

  countDownText: {
    marginTop: 16,
    fontSize: 12,
    color: Colors.grayDark,
  },
});

export default styles;
