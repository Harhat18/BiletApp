import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import useFetch from '../../../hooks/useFetch/useFetch';
import styles from './OutDateScreen.style';
import {API_URL} from '@env';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import ProductCart from '../../../component/ProductCart/ProductCart';

const SearchScreen = ({navigation}) => {
  const {data, loading, error} = useFetch(API_URL);
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
          keyExtractor={(item, index) => index.toString()}
        />
      }
    </View>
  );
};

export default SearchScreen;
