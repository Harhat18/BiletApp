import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './ProductCart.style';

const ProductCart = ({data, onSelect, navigation}) => {
  let categoryBackgroundColor = '#696969';
  if (data.category === 'Tiyatro') {
    categoryBackgroundColor = '#cc781e';
  } else if (data.category === 'Stand Up') {
    categoryBackgroundColor = '#1E90FF';
  } else if (data.category === 'Festival') {
    categoryBackgroundColor = '#e34545';
  }
  const dynamicCategoryContainerStyle = {
    ...styles.categoryContainer,
    backgroundColor: categoryBackgroundColor,
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{data.title.toUpperCase()}</Text>
      </View>
      <View style={styles.image_container}>
        <View style={dynamicCategoryContainerStyle}>
          <Text style={styles.categoryText}>{data.category}</Text>
        </View>
        <Pressable onPress={onSelect}>
          <Image
            source={
              data.images && data.images.length > 0
                ? {uri: data.images[0]}
                : require('../../assets/images/none-image.jpg')
            }
            style={styles.image}
          />
        </Pressable>
      </View>
      <Pressable onPress={onSelect}>
        <View style={styles.info_container}>
          <View style={styles.textContainer}>
            <Text style={styles.place}>{data.place}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              {new Date(data.date).toLocaleDateString('tr-TR')} -{' '}
              {data.startHour}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductCart;
