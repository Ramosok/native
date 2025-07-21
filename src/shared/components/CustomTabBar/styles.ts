import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 45,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  container: {
    width: 223,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tab: {
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeTab: {
    width: 111,
    height: 44,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    gap: 8,
  },
  inactiveTab: {
    width: 44,
    height: 44,
  },
  tabText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default styles;
