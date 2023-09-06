import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './PlaceScreen.style';

import ProductCart from '../../../component/ProductCart/ProductCart';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import {useSelector} from 'react-redux';

const PlaceScreen = ({route, navigation}) => {
  const {place} = route.params;

  const data = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

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
