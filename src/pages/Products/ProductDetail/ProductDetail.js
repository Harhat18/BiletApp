import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ProductDetail.style';
import {API_URL} from '@env';
import useFetch from '../../../hooks/useFetch/useFetch';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import SearchBar from '../../../component/SearchBar/SearchBar';
import {TextInput} from 'react-native';
const ProductDetail = ({route}) => {
  const {_id} = route.params;

  const {data, error, loading} = useFetch(`${API_URL}/${_id}`);
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <TextInput />
      <Image source={{uri: data.image}} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.place}>{data.place}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>{data.price} TL</Text>
    </View>
  );
};

export default ProductDetail;
