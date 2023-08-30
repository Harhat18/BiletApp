import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './ProductDetail.style';
import {API_URL} from '@env';
import useFetch from '../../../hooks/useFetch/useFetch';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import DetailCarousel from '../../../component/Carousel/DetailCarousel';

const ProductDetail = ({route}) => {
  const {_id} = route.params;

  const {data, error, loading} = useFetch(`${API_URL}/${_id}`);
  const {title, place, description, price, lat, lng, adress} = data;

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <DetailCarousel />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.place}>{place}</Text>
        <Text style={styles.desc}>{description}</Text>
        <Text style={styles.price}>{price} TL</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          <Marker
            coordinate={{
              latitude: lat,
              longitude: lng,
            }}
            title={place}
            description={adress}
          />
        </MapView>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
