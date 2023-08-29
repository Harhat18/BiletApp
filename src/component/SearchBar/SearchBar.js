import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View>
      <Text>aaa</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    margin: 10,
    height: 50,
    alignItems: 'center',
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
