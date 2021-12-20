import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';
import NotificationsCard from './../components/common/NotificationsCard';

function NotificationsScreen(props) {


    const carData = [
        {
            imageSource: require('../../assets/images/f1.png'),
            title: 'Robert Fox',
            subTitle: 'Posted a New Vedio',
            time: '5 Min'
        },
        {
            imageSource: require('../../assets/images/f2.png'),
            title: 'AI',
            onPress: true,
            subTitle: 'Your video is approved',
            time: '1 Hour'
        },
        {
            imageSource: require('../../assets/images/f3.png'),
            title: 'Shane Max',
            subTitle: 'Posted a New Vedio',
            time: '5 Hour'
        },
        {
            imageSource: require('../../assets/images/f4.png'),
            title: 'Aniity James',
            subTitle: 'Posted a New Vedio',
            time: '2 Day'
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* NavBar */}
            <View style={{ marginTop: RFPercentage(5), width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} style={{ position: 'absolute', left: 0 }}>
                    <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.4) }} source={require('../../assets/images/notification.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: RFPercentage(2.5), fontWeight: '700', color: Colors.black }}>
                    Notifications
                </Text>
                <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0 }}>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.7) }}>
                        Mark all as read
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Cart */}

                    {carData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(5) : RFPercentage(2), width: '100%', }}>

                            <NotificationsCard onPressButtons={item.onPress} imageSource={item.imageSource} Title={item.title} subTitle={item.subTitle} time={item.time} />

                        </View>

                    ))}

                    <View style={{ marginBottom: RFPercentage(15) }} />

                </View>
            </ScrollView>

            {/* Bottom tab */}
            < BottomTab props={props} />
        </Screen >
    );
}


const styles = StyleSheet.create({
    dots: {
        width: RFPercentage(0.6),
        height: RFPercentage(0.6),
        backgroundColor: Colors.black,
        borderRadius: RFPercentage(10)
    }
})

export default NotificationsScreen;