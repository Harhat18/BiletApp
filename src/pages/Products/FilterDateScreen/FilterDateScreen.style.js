import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue', // Buton arkaplan rengi
    padding: 10,
    borderRadius: 5, // Buton kenar yuvarlaklığı
  },
  warning: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {fontSize: 18},
});
