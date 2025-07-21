import { StyleSheet } from 'react-native';

import { Colors } from '@/lib/theme/colors';

const styles = StyleSheet.create({
  title: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: 'bold',
  },

  description: {
    color: Colors.gray300,
    paddingVertical: 16,
  },

  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  email: {
    marginBottom: 20,
  },

  buttonText: {
    fontWeight: 'bold',
  },

  closeText: {
    textAlign: 'center',
    marginTop: 10,
  },

  inputContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },

  policyContainer: {
    marginTop: 18,
    marginBottom: 36,
    textAlign: 'center',
    color: Colors.gray300,
    fontSize: 12,
  },

  policyText: {
    color: Colors.gray500,
    fontWeight: '500',
  },
});

export default styles;
