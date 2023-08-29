import {Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './IconButton.style';

const IconButton = ({onPress, name, color, size}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
