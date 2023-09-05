import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  carousel: {
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
    textAlign: 'center',
  },
  categoryPriceContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  priceTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    textAlign: 'center',
  },
  category: {
    fontSize: 16,
    textAlign: 'center',
  },
  adress: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
  toggleButton: {
    alignSelf: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  toggleIosButton: {
    flex: 1,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
