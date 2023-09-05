import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: deviceSize.height / 3,
    width: deviceSize.width - 10,
  },
  map: {flex: 1},
});
