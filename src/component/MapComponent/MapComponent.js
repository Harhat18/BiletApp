import {View} from 'react-native';
import React from 'react';
import styles from './MapComponent.style';
import MapView, {Marker} from 'react-native-maps';
import {API_URL} from '@env';
import useFetch from '../../hooks/useFetch/useFetch';

const MapComponent = ({route}) => {
  const {_id} = route.params;
  const {data} = useFetch(`${API_URL}/${_id}`);

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: data?.lat,
          longitude: data?.lng,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        <Marker
          coordinate={{
            latitude: data?.lat,
            longitude: data?.lng,
          }}
          title={data?.place}
          description={data?.adress}
        />
      </MapView>
    </View>
  );
};

export default MapComponent;
