import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import {API_URL} from '@env';
import useFetch from '../../../hooks/useFetch/useFetch';

import ProductCart from '../../../component/ProductCart/ProductCart';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';

const PlaceScreen = ({route, navigation}) => {
  const {place} = route.params;
  const {data, loading, error} = useFetch(API_URL);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const filteredProducts = data.filter(item => item.place === place);
      setFilteredData(filteredProducts);
    }
  }, [data, place]);

  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };
  const renderFilter = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.placeFilter}>{place}</Text>
      <FlatList
        data={filteredData}
        renderItem={renderFilter}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  placeFilter: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
});
