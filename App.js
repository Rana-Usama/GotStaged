import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { createDrawerNavigator } from "@react-navigation/drawer"

//screens
import SignInScreen from './app/screens/SignInScreen';
import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';
import FollowersScreen from './app/screens/FollowersScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';
import EditProfileScreen from './app/screens/EditProfileScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import MyChannelScreen from './app/screens/MyChannelScreen';
import StartAConcert from './app/screens/StartAConcert';
import PostYourVideo from './app/screens/PostYourVideo';
import VideoHomeScreen from './app/screens/VideoHomeScreen';
import ManageAddScreen from './app/screens/ManageAddScreen';
import AdvertisementScreen from './app/screens/AdvertisementScreen';

//compoenents
import AppDrawer from './app/components/common/AppDrawer';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {


  const HomeDrawer = () => {
    return <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: 'right' }} initialRouteName="HomeScreen" overlayColor="transparent" edgeWidth={100} drawerStyle={{ backgroundColor: Colors.white, width: "75%" }} drawerContent={(props) => <AppDrawer {...props} />}  >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="MyChannelScreen" component={MyChannelScreen} />
      <Drawer.Screen name="FollowersScreen" component={FollowersScreen} />
      <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Drawer.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Drawer.Screen name="ManageAddScreen" component={ManageAddScreen} />
      <Drawer.Screen name="AdvertisementScreen" component={AdvertisementScreen} />

    </Drawer.Navigator>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SignInScreen">
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        <Stack.Screen name="VideoHomeScreen" component={VideoHomeScreen} />
        <Stack.Screen name="PostYourVideo" component={PostYourVideo} />
        <Stack.Screen name="StartAConcert" component={StartAConcert} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


