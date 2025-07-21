import { StyleSheet, StatusBar } from 'react-native';

import { Colors } from '@/lib/theme/colors';

const heightTopBar = 40;
const marginTop = 20;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingHorizontal: 20,
  },

  headerContainer: {
    marginTop: (StatusBar.currentHeight ?? heightTopBar) + marginTop,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    flex: 1,
  },

  mainContainer: {
    alignSelf: 'flex-end',
    paddingBottom: 26,
  },

  titleContainer: {
    paddingVertical: 20,
    backgroundColor: 'transparent',
  },

  title: {
    color: Colors.white,
    fontSize: 36,
    marginBottom: 16,
    fontWeight: 'bold',
  },

  description: {
    color: Colors.transparentWhite,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },

  vandrounik: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },

  link: {
    paddingTop: 10,
  },

  skip: {
    fontSize: 12,
    color: Colors.white,
  },

  buttonContainer: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    backgroundColor: 'transparent',
  },

  enterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    backgroundColor: 'transparent',
  },

  text: {
    fontSize: 16,
    color: Colors.white,
  },

  enter: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '600',
    paddingLeft: 5,
  },

  linkPressed: {
    opacity: 0.6,
  },
});

export default styles;
