import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
  Pressable,
} from 'react-native';
import data from '../../utils/data.json';

const {width: screenWidth} = Dimensions.get('window');

const FavoritesCarousel = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(data);
  }, []);

  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };

  const renderItem = ({item}, parallaxProps) => {
    return (
      <Pressable onPress={() => handleProductselect(item._id)}>
        <View style={styles.item}>
          <ParallaxImage
            source={{uri: item.image}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        inactiveSlideShift={3}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
      />
    </View>
  );
};

export default FavoritesCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
  },
  item: {
    width: screenWidth - 60,
    height: 178,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'center',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
