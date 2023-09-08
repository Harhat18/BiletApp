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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  place: {
    fontSize: 18,

    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },

  desc: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    margin: 10,
    textAlign: 'center',
    color: 'black',
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
    color: 'black',
  },
  categoryContainer: {flex: 1, alignItems: 'flex-end'},
  dotContainer: {flex: 0.4},
  priceContainer: {flex: 1, alignItems: 'flex-start'},
  price: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  category: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
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
