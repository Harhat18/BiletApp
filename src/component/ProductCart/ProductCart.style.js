import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 5,
    flexDirection: 'column',
  },
  title_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f4f4f',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 15,
  },
  image_container: {alignContent: 'center'},
  image: {
    height: deviceSize.height / 4,
    width: deviceSize.width - 20,
    resizeMode: 'stretch',
  },
  info_container: {
    flexDirection: 'row',
    backgroundColor: '#2f4f4f',
    alignContent: 'space-between',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  place: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
  },
  date: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
  },
  categoryContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#696969',
    padding: 5,
    zIndex: 1,
    margin: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
  },
});
