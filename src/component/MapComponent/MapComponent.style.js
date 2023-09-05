import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: deviceSize.height / 3,
    width: deviceSize.width - 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c1c1c1',
  },
  map: {flex: 1, borderRadius: 15},
});
