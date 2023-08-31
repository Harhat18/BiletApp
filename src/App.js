/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Product from './pages/Products/Products/Products';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';
import Profile from './pages/Profile/Profile/Profile';
import ProfileEdit from './pages/Profile/ProfileEdit/ProfileEdit';

import IconComponent from './component/IconComponents/IconComponents';
import SearchScreen from './pages/Products/SearchScreen/SearchScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Tab = createBottomTabNavigator();
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
          headerTitleAlign: 'center',
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
          headerTitleAlign: 'center',
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
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Tab.Navigator>
          <Tab.Screen
            name="Ticket"
            component={ProductStack}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <IconComponent name={'music'} color={color} size={size} />
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
      </Provider>
    </NavigationContainer>
  );
};

export default App;
