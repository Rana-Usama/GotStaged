import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function NotificationsScreen(props) {

    const [buttons, setButtons] = useState(false);

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
                <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', left: 0 }}>
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

                        <View key={i} style={{ justifyContent: 'center', marginTop: i == 0 ? RFPercentage(5) : RFPercentage(1.5), width: '90%', height: RFPercentage(14), backgroundColor: Colors.twoButtons, borderRadius: RFPercentage(2), alignSelf: 'center' }}>

                            <TouchableOpacity onPress={() => setButtons(true)} style={{ marginLeft: RFPercentage(3), flexDirection: 'row', width: '90%', justifyContent: 'flex-start', alignItems: 'center' }}>
                                {/* DP Image */}
                                <TouchableOpacity activeOpacity={0.5}>
                                    <Image style={{ width: RFPercentage(8), height: RFPercentage(8) }} source={item.imageSource} />
                                </TouchableOpacity>
                                {/* Details */}
                                <View style={{ marginLeft: RFPercentage(1.2) }}>
                                    <Text style={{ color: Colors.black, fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                                        {item.title}
                                    </Text>
                                    <View style={{ marginTop: RFPercentage(0.8), flexDirection: 'row' }}>
                                        <Text style={{ color: '#707070', fontSize: RFPercentage(1.6) }}>
                                            {item.subTitle}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#707070", position: 'absolute', right: 0, fontSize: RFPercentage(1.7) }}>
                                    {item.time}
                                </Text>
                            </TouchableOpacity>
                            {/* {buttons ?
                                <View style={{ alignSelf: 'center', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2) }}>
                                    <TouchableOpacity onPress={() => setButtons(false)} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), height: RFPercentage(6), borderRadius: RFPercentage(1), backgroundColor: Colors.twoButtons, borderColor: "#757575", borderWidth: RFPercentage(0.1) }}>
                                        <Text style={{ color: '#757575', fontSize: RFPercentage(1.8) }}>
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setButtons(false)} style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), borderRadius: RFPercentage(1), height: RFPercentage(6), backgroundColor: Colors.primary, borderColor: "#757575" }}>
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(1.8) }}>
                                            Post
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                null
                            } */}
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