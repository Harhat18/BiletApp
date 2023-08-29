import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  image: {
    height: deviceSize.height / 3,
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  place: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    margin: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    height: deviceSize.height / 3,
    width: deviceSize.width - 10,
  },
  map: {flex: 1},
});
