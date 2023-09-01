import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './ProductCart.style';

const ProductCart = ({data, onSelect}) => {
  let categoryBackgroundColor = '#696969';

  if (data.category === 'Tiyatro') {
    categoryBackgroundColor = '#FFD700';
  } else if (data.category === 'Stand Up') {
    categoryBackgroundColor = '#1E90FF';
  } else if (data.category === 'Festival') {
    categoryBackgroundColor = '#FF0000';
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
          <Image
            source={
              data.images && data.images.length > 0
                ? {uri: data.images[0]}
                : require('../../assets/images/none-image.jpg')
            }
            style={styles.image}
          />
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
