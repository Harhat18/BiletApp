import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './ProductCart.style';

const ProductCart = ({data, onSelect}) => {
  let categoryBackgroundColor = '#696969'; // Varsayılan renk

  if (data.category === 'Tiyatro') {
    categoryBackgroundColor = '#FFD700'; // Sarı rengin kodu
  } else if (data.category === 'Stand Up') {
    categoryBackgroundColor = '#1E90FF'; // Mavi rengin kodu
  } else if (data.category === 'Festival') {
    categoryBackgroundColor = '#FF0000'; // Kırmızı rengin kodu
  }
  const dynamicCategoryContainerStyle = {
    ...styles.categoryContainer,
    backgroundColor: categoryBackgroundColor,
  };

  return (
    <Pressable onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{data.title.toUpperCase()}</Text>
        </View>
        <View style={styles.image_container}>
          <View style={dynamicCategoryContainerStyle}>
            <Text style={styles.categoryText}>{data.category}</Text>
          </View>
          <Image source={{uri: data.images[0]}} style={styles.image} />
        </View>
        <View style={styles.info_container}>
          <Text style={styles.place}>{data.place}</Text>
          <Text style={styles.date}>{data.date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCart;
