import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    margin: 10,
    color: 'black',
  },
  filterButton: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    marginBottom: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center', // Ortala
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı şeffaf siyah arka plan
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    elevation: 5,
    color: 'black',
  },

  categoryButton: {
    marginBottom: 10,
    color: 'black',
  },
  categoryButtonText: {
    fontSize: 24,
    color: 'black',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  itemCategory: {
    color: 'gray',
  },
  warning: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {fontSize: 18},
});
