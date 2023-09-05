import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Linking,
  Platform,
  Share,
  Pressable,
} from 'react-native';
import styles from './ProductDetail.style';

import {API_URL} from '@env';
import useFetch from '../../../hooks/useFetch/useFetch';

import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import DetailCarousel from '../../../component/Carousel/DetailCarousel';
import MapComponent from '../../../component/MapComponent/MapComponent';

const ProductDetail = ({route, navigation}) => {
  const {_id} = route.params;
  const {data, error, loading} = useFetch(`${API_URL}/${_id}`);
  const {title, place, description, price, lat, lng, adress, categoryPrice} =
    data;

  const openMap = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    Linking.openURL(mapUrl);
  };
  const openAppleMap = () => {
    const mapUrl = `http://maps.apple.com/?ll=${lat},${lng}`;
    Linking.openURL(mapUrl);
  };
  const handlePlace = () => {
    navigation.navigate('PlaceScreen', {place});
  };
  const handleShare = () => {
    Share.share({
      title: title,
      message: `Bu muhteşem faliyeti gördünmü?: ${title} at ${place} for ${price} TL`,
    })
      .then(result => {
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log(`Shared via ${result.activityType}`);
          } else {
            console.log('Shared successfully');
          }
        } else if (result.action === Share.dismissedAction) {
          console.log('Sharing dismissed');
        }
      })
      .catch(err => {
        console.error('Error sharing:', err);
      });
  };
  const renderCategoryPrices = () => {
    return categoryPrice.map(item => (
      <View key={item._id} style={styles.categoryPriceContainer}>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={styles.category}>{item.category} </Text>
        </View>
        <View style={{flex: 0.4}}>
          <Text style={styles.category}>:</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text style={styles.price}>{item.price} TL</Text>
        </View>
      </View>
    ));
  };
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.carousel}>
            <DetailCarousel data={data} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Pressable onPress={handlePlace}>
            <Text style={styles.place}>{place}</Text>
          </Pressable>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.priceTitle}>BİLET ÜCRETLERİ</Text>
          {renderCategoryPrices()}
          <Pressable onPress={handleShare} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>PAYLAŞ</Text>
          </Pressable>
          <Text style={styles.adress}>Adres:{adress}</Text>
          {Platform.OS === 'android' ? (
            <Pressable onPress={openMap} style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>
                Hatita Üzerinde Göster
              </Text>
            </Pressable>
          ) : (
            <Pressable onPress={openAppleMap} style={styles.toggleIosButton}>
              <MapComponent
                route={route}
                lat={lat}
                lng={lng}
                address={adress}
                place={place}
              />
            </Pressable>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
