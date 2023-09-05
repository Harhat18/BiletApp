import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconComponent from './component/IconComponents/IconComponents';

import ProfileStack from './stack/ProfileStack';
import ProductStack from './stack/ProductStack';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Bilet"
          component={ProductStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <IconComponent name={'ticket'} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <IconComponent name={'account'} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
