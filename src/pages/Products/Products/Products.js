/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import {FlatList, ScrollView, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import styles from './Products.style';
import ProductCart from '../../../component/ProductCart/ProductCart';
import useFetch from '../../../hooks/useFetch/useFetch';
import {API_URL} from '@env';
import Error from '../../../component/Error/Error.js';
import Loading from '../../../component/Loading/Loading.js';
import IconButton from '../../../component/IconButton/IconButton';
import SearchBar from '../../../component/SearchBar/SearchBar';
import FavoritesCarousel from '../../../component/Carousel/FavoritesCarousel';

const Product = ({navigation}) => {
  const {data, error, loading} = useFetch(API_URL);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCarouselVisible, setCarouselVisible] = useState(true); // Yeni durum

  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };

  const renderProduct = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );
  function headerButtonPressHandler() {
    setSearchVisible(true);
    setCarouselVisible();
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
    <ScrollView>
      <View style={{flex: 1}}>
        {isCarouselVisible && (
          <View style={{flex: 1}}>
            <FavoritesCarousel />
          </View>
        )}
        <View style={styles.container}>
          {isSearchVisible && <SearchBar />}

          <FlatList
            keyExtractor={item => item._id}
            data={data}
            renderItem={renderProduct}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;
