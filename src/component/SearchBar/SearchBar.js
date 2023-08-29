import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import IconButton from '../IconButton/IconButton';

export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
      <IconButton
        name={'magnify'}
        color={'white'}
        size={26}
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    margin: 10,
    height: 50,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
