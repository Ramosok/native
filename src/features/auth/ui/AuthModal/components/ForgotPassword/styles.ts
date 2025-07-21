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
  },

  inputContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },

  button: {
    marginBottom: 30,
  },
});

export default styles;
