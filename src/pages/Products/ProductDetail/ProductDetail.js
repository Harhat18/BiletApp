import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './ProductDetail.style';
import {API_URL} from '@env';
import useFetch from '../../../hooks/useFetch/useFetch';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import DetailCarousel from '../../../component/Carousel/DetailCarousel';
import MapComponent from '../../../component/MapComponent/MapComponent';

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
          <DetailCarousel data={data} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.place}>{place}</Text>
        <Text style={styles.desc}>{description}</Text>
        <Text style={styles.price}>{price} TL</Text>
      </View>
      <MapComponent
        route={route}
        lat={lat}
        lng={lng}
        adress={adress}
        place={place}
      />
    </ScrollView>
  );
};

export default ProductDetail;
