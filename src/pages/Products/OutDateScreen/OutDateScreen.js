import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './OutDateScreen.style';

import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import ProductCart from '../../../component/ProductCart/ProductCart';
import {useSelector} from 'react-redux';

const SearchScreen = ({navigation}) => {
  const data = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const currentDate = new Date();
      const filtered = data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate < currentDate;
      });
      setFilteredData(filtered);
    }
  }, [data]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const renderSearch = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );
  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TARİHİ GEÇEN FAALİYETLER</Text>
      {
        <FlatList
          data={filteredData}
          renderItem={renderSearch}
          keyExtractor={item => item._id}
        />
      }
    </View>
  );
};

export default SearchScreen;
