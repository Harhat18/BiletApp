/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, {useLayoutEffect} from 'react';
import {FlatList, ScrollView, View, ViewPropTypes} from 'react-native';

import styles from './Products.style';

import {API_URL} from '@env';
import useFetch from '../../../hooks/useFetch/useFetch';

import Error from '../../../component/Error/Error.js';
import Loading from '../../../component/Loading/Loading.js';
import IconButton from '../../../component/IconButton/IconButton';

import FavoritesCarousel from '../../../component/Carousel/FavoritesCarousel';
import ProductCart from '../../../component/ProductCart/ProductCart';
import {useDispatch} from 'react-redux';
import {setData, setLoading, setError} from '../../../redux/product';

const Product = ({navigation}) => {
  const dispatch = useDispatch();
  const {data, error, loading} = useFetch(API_URL);

  dispatch(setData(data));
  dispatch(setError(error));
  dispatch(setLoading(loading));

  const currentDate = new Date();
  const filteredData = data.filter(item => new Date(item.date) >= currentDate);
  const sortedData = filteredData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

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
              size={24}
              onPress={searchPress}
            />
            <IconButton
              name={'filter'}
              color={'white'}
              size={24}
              onPress={filterPress}
            />
            <IconButton
              name={'calendar-range'}
              color={'white'}
              size={24}
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
              size={24}
              onPress={OutDatePress}
            />
          </View>
        );
      },
    });
  }, [navigation]);
  // return <Error />;
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.carouselContainer}>
          <FavoritesCarousel navigation={navigation} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={item => item.title}
            data={sortedData}
            renderItem={renderProduct}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Product;
