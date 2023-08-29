import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ProductDetail.style';
import {API_URL} from '@env';
import useFetch from '../../../hooks/useFetch/useFetch';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import MapView, {Marker} from 'react-native-maps';

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
      <Image source={{uri: data.image}} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.place}>{data.place}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>{data.price} TL</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: data.latitude, longitude: data.longitude}}
          title={data.place}
          description="Product Location"
        />
      </MapView>
    </View>
  );
};

export default ProductDetail;
