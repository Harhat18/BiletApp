/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import {FlatList, TextInput, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import styles from './Products.style';
import ProductCart from '../../../component/ProductCart/ProductCart';
import useFetch from '../../../hooks/useFetch/useFetch';
import {API_URL} from '@env';
import Error from '../../../component/Error/Error.js';
import Loading from '../../../component/Loading/Loading.js';
import IconButton from '../../../component/IconButton/IconButton';
import SearchBar from '../../../component/SearchBar/SearchBar';

const Product = ({navigation}) => {
  const {data, error, loading} = useFetch(API_URL);

  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };

  const renderProduct = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );
  function headerButtonPressHandler() {
    console.log('Pressed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{flexDirection: 'row'}}>
            <IconButton
              name={'magnify'}
              color={'white'}
              size={26}
              onPress={headerButtonPressHandler}
            />
            <IconButton name={'filter'} color={'white'} size={26} />
          </View>
        );
      },
    });
  }, [navigation]);
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        keyExtractor={item => item._id}
        data={data}
        renderItem={renderProduct}
      />
    </View>
  );
};

export default Product;
