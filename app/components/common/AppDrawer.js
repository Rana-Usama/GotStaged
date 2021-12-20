import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../../config/Colors";

function AppDrawer({ navigation }) {
    const items = [
        {
            id: 0,
            label: "Profile",
            icon: require('../../../assets/images/d1.png'),
            width: RFPercentage(2.2),
            height: RFPercentage(2.4),
            path: "ProfileScreen"
        },
        {
            id: 1,
            label: "Channel",
            icon: require('../../../assets/images/d2.png'),
            width: RFPercentage(2.2),
            height: RFPercentage(2.4),
            path: "MyChannelScreen"
        },
        {
            id: 2,
            label: "Playlist",
            icon: require('../../../assets/images/d3.png'),
            width: RFPercentage(2.8),
            height: RFPercentage(2.4),
            path: "HomeScreen"
        },
        {
            id: 3,
            label: "History",
            icon: require('../../../assets/images/d4.png'),
            width: RFPercentage(2.5),
            height: RFPercentage(2.5),
            path: "NotificationsScreen"
        },
        {
            id: 4,
            label: "Advertisement",
            icon: require('../../../assets/images/d5.png'),
            width: RFPercentage(2.2),
            height: RFPercentage(2.6),
            path: "AdvertisementScreen"
        },
        {
            id: 5,
            label: "Settings",
            icon: require('../../../assets/images/d6.png'),
            width: RFPercentage(2.4),
            height: RFPercentage(2.4),
            path: "HomeScreen"
        },
        {
            id: 6,
            label: "Privacy Policy",
            icon: require('../../../assets/images/d7.png'),
            width: RFPercentage(2.2),
            height: RFPercentage(2.8),
            path: "MyChannelScreen"
        },
        {
            id: 7,
            label: "Terms & Conditions",
            icon: require('../../../assets/images/d8.png'),
            width: RFPercentage(2.2),
            height: RFPercentage(2.5),
            path: "MyChannelScreen"
        },

    ]

    return (
        <View style={{ flex: 1, width: '100%', position: 'absolute' }}  >



            <ImageBackground style={{ width: '100%', height: RFPercentage(25), justifyContent: 'center', alignItems: 'center' }} source={require('../../../assets/images/top.png')} >
                <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: RFPercentage(2) }}>
                    <TouchableOpacity activeOpacity={0.8} >
                        <Image style={{ width: RFPercentage(14), height: RFPercentage(14) }} source={require('../../../assets/images/profile.png')} />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', marginTop: RFPercentage(1.5), color: Colors.white, fontWeight: 'bold' }} >
                        Mamie Lang
                    </Text>
                    <Text style={{ alignSelf: 'center', marginTop: RFPercentage(0.5), color: '#EBCBCB', fontWeight: 'bold' }} >
                        abc @ gmail.com
                    </Text>
                </View>
            </ImageBackground>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                {/* <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}> */}
                {/* items with devider */}
                {items.map((item, index) => (
                    <View key={index} style={{ marginTop: index === 0 ? RFPercentage(4) : RFPercentage(4.9), justifyContent: 'center', alignItems: "center", flexDirection: 'row' }} >
                        <Image style={{ width: item.width, height: item.height }} source={item.icon} />
                        <View style={{ alignItems: "center", width: "70%" }} >
                            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                navigation.navigate(item.path)
                            }} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                <Text style={{ marginLeft: RFPercentage(1.5), color: Colors.black, fontSize: RFPercentage(2.2) }} >{item.label}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                {/* Logout */}
                <View style={{ marginLeft: RFPercentage(0.6), marginTop: RFPercentage(6), justifyContent: 'center', alignItems: "center", flexDirection: 'row' }} >
                    <Image style={{ width: RFPercentage(2.4), height: RFPercentage(2) }} source={require('../../../assets/images/d9.png')} />
                    <View style={{ alignItems: "center", width: "70%" }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('SignInScreen') }} activeOpacity={0.7} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ marginLeft: RFPercentage(1.5), color: Colors.black, fontSize: RFPercentage(2.4) }} >Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </View> */}
            </ScrollView>

        </View >
    );
}


export default AppDrawer;