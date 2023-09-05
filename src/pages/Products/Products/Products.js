/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, {useLayoutEffect} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import styles from './Products.style';

import {API_URL} from '@env';
import useFetch from '../../../hooks/useFetch/useFetch';

import Error from '../../../component/Error/Error.js';
import Loading from '../../../component/Loading/Loading.js';
import IconButton from '../../../component/IconButton/IconButton';

import FavoritesCarousel from '../../../component/Carousel/FavoritesCarousel';
import ProductCart from '../../../component/ProductCart/ProductCart';

const Product = ({navigation}) => {
  const {data, error, loading} = useFetch(API_URL);

  const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
  const currentDate = new Date();
  const filteredData = data.filter(item => new Date(item.date) >= currentDate);

  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };

  function searchPress() {
    navigation.navigate('SearchScreen');
  }
  function filterPress() {
    navigation.navigate('FilterScreen');
  }
  function filterDatePress() {
    navigation.navigate('FilterDateScreen');
  }
  function OutDatePress() {
    navigation.navigate('OutDateScreen');
  }
  const renderProduct = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.header}>
            <IconButton
              name={'magnify'}
              color={'white'}
              size={26}
              onPress={searchPress}
            />
            <IconButton
              name={'filter'}
              color={'white'}
              size={26}
              onPress={filterPress}
            />
            <IconButton
              name={'calendar-range'}
              color={'white'}
              size={26}
              onPress={filterDatePress}
            />
          </View>
        );
      },
      headerLeft: () => {
        return (
          <View style={styles.header}>
            <IconButton
              name={'update'}
              color={'white'}
              size={26}
              onPress={OutDatePress}
            />
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <FavoritesCarousel navigation={navigation} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={item => item.title}
            data={filteredData}
            renderItem={renderProduct}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;
