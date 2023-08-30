import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const data = [
  {
    images:
      'https://cdn.bubilet.com.tr/files/Etkinlik/mary-jane-konseri-26226.jpg',
  },
  {
    images:
      'https://img3.aksam.com.tr/imgsdisk/2020/10/30/t25_mary-jane-adli-muzik-grub-138.jpg',
  },
  {
    images: 'https://i.ytimg.com/vi/sdEuwKbnflM/maxresdefault.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const DetailCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(data);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.images}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 20}
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

export default DetailCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 30,
    height: 250,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    resizeMode: 'stretch',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color for title
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
