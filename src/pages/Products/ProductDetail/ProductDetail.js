import {View, Text, Image, ScrollView} from 'react-native';
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
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: data.image}} style={styles.image} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.place}>{data.place}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
        <View style={styles.mapContainer}>
          {/* <MapView
            style={styles.map}
            initialRegion={{
              latitude: data.location[0],
              longitude: data.location[1],
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}>
            <Marker
              coordinate={{
                latitude: data.location[0],
                longitude: data.location[1],
              }}
              title={data.place}
              description={data.adress}
            />
          </MapView> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
