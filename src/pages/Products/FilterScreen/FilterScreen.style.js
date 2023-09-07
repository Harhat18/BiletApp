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
  selectContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'black',
  },
  selectedCategoryButton: {
    backgroundColor: '#2f4f4f',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  categoryButtonText: {color: 'black'},
  selectedCategoryText: {
    color: 'white',
  },
  filterButton: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
    marginBottom: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
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
