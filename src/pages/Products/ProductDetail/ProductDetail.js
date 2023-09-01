import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
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

  const openMap = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    Linking.openURL(mapUrl);
  };
  const openAppleMap = () => {
    const mapUrl = `http://maps.apple.com/?ll=${lat},${lng}`;
    Linking.openURL(mapUrl);
  };
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
      <Text style={styles.adress}>Adres:{adress}</Text>
      {Platform.OS === 'android' ? (
        <TouchableOpacity onPress={openMap} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>Hatita Üzerinde Göster</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={openAppleMap} style={styles.toggleIosButton}>
          <MapComponent
            route={route}
            lat={lat}
            lng={lng}
            address={adress}
            place={place}
          />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default ProductDetail;
