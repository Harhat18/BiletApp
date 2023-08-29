import {Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const IconComponent = ({name, size, color}) => {
  return (
    <Text>
      <Icon name={name} size={size} color={color} />
    </Text>
  );
};

export default IconComponent;
