import { StyleSheet } from 'react-native';

export const createModalStyles = (maxHeight: number) => {
  return StyleSheet.create({
    backdrop: {
      ...StyleSheet.absoluteFillObject,
    },
    wrapper: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
    sheetContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: maxHeight,
      borderTopLeftRadius: 54,
      borderTopRightRadius: 54,
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    handleBar: {
      width: 40,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#ccc',
      alignSelf: 'center',
      marginVertical: 8,
    },
    sheetContent: {
      flex: 1,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
  });
};
