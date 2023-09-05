import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../pages/Profile/LoginScreen/LoginScreen';
import SignupScreen from '../pages/Profile/SignupScreen/SignupScren';
import WellcomeScreen from '../pages/Profile/WellcomeScreen/WelcomeScreen';
import Profile from '../pages/Profile/Profile/Profile';
import ProfileEdit from '../pages/Profile/ProfileEdit/ProfileEdit';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Wellcome"
        component={WellcomeScreen}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          title: 'BiletApp',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center', // Use 'center' for centered title
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ProfileEditScreen"
        component={ProfileEdit}
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

export default ProfileStack;
