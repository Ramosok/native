import { Dimensions, StyleSheet } from 'react-native';

import { Colors } from '@/lib/theme/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: { flex: 1 },
  map: {
    width: width,
    height: height,
    flex: 1,
  },
  searchInputWrapper: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    zIndex: 999,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
  },
});

export default styles;
