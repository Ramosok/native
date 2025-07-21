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
  title: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: Colors.gray300,
    paddingVertical: 16,
    paddingRight: 25,
    marginBottom: 20,
  },
  optContainer: {
    flex: 1,
  },

  nextBtn: {
    width: '100%',
  },

  countDown: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },

  countDownText: {
    marginTop: 16,
    fontSize: 12,
    color: Colors.grayDark,
  },
});

export default styles;
