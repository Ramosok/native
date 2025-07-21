import { StyleSheet } from 'react-native';

import { Colors } from '@/lib/theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  input: {
    width: 62,
    height: 62,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: Colors.white,
    fontFamily: 'Inter',
  },
});
export default styles;
