import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectDateContainer: {flexDirection: 'row'},
  buttonContainer: {flex: 1},
  button: {
    marginTop: 10,
    padding: 10,
  },
  textContainer: {
    flex: 1,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  warning: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {fontSize: 18, color: 'black'},
});
