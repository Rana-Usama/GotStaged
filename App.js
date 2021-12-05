import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SignInScreen from './app/screens/SignInScreen';
import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';
import FollowersScreen from './app/screens/FollowersScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';
import EditProfileScreen from './app/screens/EditProfileScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="EditProfileScreen">
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
        <Stack.Screen name="FollowersScreen" component={FollowersScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


