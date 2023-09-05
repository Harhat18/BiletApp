import {View} from 'react-native';
import React from 'react';
import styles from './MapComponent.style';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const MapComponent = ({place, lat, lng, adress}) => {
  const initialRegion = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}>
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
  );
};

export default MapComponent;
