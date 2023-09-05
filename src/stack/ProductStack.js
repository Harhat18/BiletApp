import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from '../pages/Products/Products/Products';
import ProductDetail from '../pages/Products/ProductDetail/ProductDetail';
import SearchScreen from '../pages/Products/SearchScreen/SearchScreen';
import FilterScreen from '../pages/Products/FilterScreen/FilterScreen';
import PlaceScreen from '../pages/Products/ProductDetail/PlaceScreen';
import FilterDateScreen from '../pages/Products/FilterDateScreen/FilterDateScreen';
import OutDateScreen from '../pages/Products/OutDateScreen/OutDateScreen';
const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductScreen"
        component={Product}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetail}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="FilterDateScreen"
        component={FilterDateScreen}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="PlaceScreen"
        component={PlaceScreen}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="OutDateScreen"
        component={OutDateScreen}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};
export default ProductStack;
