import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function FollowersScreen(props) {

    const data = [
        {
            imageSource: require('../../assets/images/f1.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f2.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f3.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f4.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f5.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f6.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f7.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f8.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f9.png'),
            name: 'Lucia Burns'
        },
        {
            imageSource: require('../../assets/images/f10.png'),
            name: 'Lucia Burns'
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* NavBar */}
            <View style={styles.navBarContainer}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} style={{ position: 'absolute', left: 0 }}>
                    <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.4) }} source={require('../../assets/images/notification.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: RFPercentage(2.5), fontWeight: '700', color: Colors.black }}>
                    Followers
                </Text>
                <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0 }}>

                    <Feather name="search" style={{ fontSize: RFPercentage(2.7) }} color={Colors.black} />
                </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {data.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(10) : RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Image style={{ width: RFPercentage(6.2), height: RFPercentage(6.2) }} source={item.imageSource} />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: RFPercentage(1.5), fontSize: RFPercentage(2), fontWeight: '700', color: Colors.black }}>
                                {item.name}
                            </Text>
                            <TouchableOpacity activeOpacity={0.4} style={{ position: 'absolute', right: 0, top: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.dots} />
                                <View style={[styles.dots, { marginTop: RFPercentage(0.4) }]} />
                                <View style={[styles.dots, { marginTop: RFPercentage(0.4) }]} />
                            </TouchableOpacity>
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
    },
    navBarContainer: {
        marginTop: RFPercentage(5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FollowersScreen;