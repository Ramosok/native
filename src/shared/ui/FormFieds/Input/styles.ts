import { StyleSheet } from 'react-native';

import { Colors } from '@/lib/theme/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
    borderRadius: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.grayLight,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 6,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: Colors.black,
    fontFamily: 'Inter',
  },
  icon: {
    marginLeft: 8,
  },
  errorText: {
    marginTop: 4,
    color: Colors.red,
    fontSize: 12,
    paddingLeft: 22,
  },
});

export default styles;
