import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const [active, setActive] = useState('1')

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* NavBar */}

            <ImageBackground style={{ width: '100%', height: RFPercentage(16) }} source={require('../../assets/images/back.png')}>
                <View style={{ position: 'absolute', bottom: RFPercentage(4), width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Notification icon */}
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', left: RFPercentage(2), }}>
                        <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2) }} source={require('../../assets/images/notification.png')} />
                    </TouchableOpacity>

                    {/* logo */}
                    <Image source={require('../../assets/images/smallLogo.png')} />

                    {/* vedio icon*/}
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(8), }}>
                        <Image style={{ width: RFPercentage(3.5), height: RFPercentage(2.3) }} source={require('../../assets/images/vedio.png')} />
                    </TouchableOpacity>

                    {/* serch icon */}
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(2), }}>
                        <Image style={{ width: RFPercentage(2.4), height: RFPercentage(2.4) }} source={require('../../assets/images/search.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* Top buttons */}

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(3), width: "90%", height: RFPercentage(7), backgroundColor: Colors.twoButtons, borderRadius: RFPercentage(10) }}>
                {/* First Button */}
                <TouchableOpacity onPress={() => setActive('1')} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', width: "45%", height: RFPercentage(5), backgroundColor: active == '1' ? Colors.white : Colors.twoButtons, borderRadius: RFPercentage(10) }}>
                    <Text style={{ color: active == '1' ? Colors.black : '#707070', fontSize: RFPercentage(1.8), fontWeight: '500' }}>
                        FEED
                    </Text>
                </TouchableOpacity>
                {/*Second button */}
                <TouchableOpacity onPress={() => setActive('2')} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2), width: "45%", height: RFPercentage(5), backgroundColor: active == '2' ? Colors.white : Colors.twoButtons, borderRadius: RFPercentage(10) }}>
                    <Text style={{ color: active == '2' ? Colors.black : '#707070', fontSize: RFPercentage(1.8), fontWeight: '500' }}>
                        SUBSCRIPTIONS
                    </Text>
                </TouchableOpacity>
            </View>

            {/*Vedio Cart */}

            <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                {/*Thumbnail of vedio */}
                <ImageBackground style={{ overflow: 'hidden', borderRadius: RFPercentage(2), marginTop: RFPercentage(5), alignSelf: 'center', width: '100%', height: RFPercentage(30) }} source={require('../../assets/images/vimage1.png')}>
                    {/* Views and eye icon */}
                    <View style={{ flexDirection: 'row', position: 'absolute', top: RFPercentage(2), left: RFPercentage(2), backgroundColor: Colors.darkGrey2, borderRadius: RFPercentage(3), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(4.2) }}>
                        <Image style={{ width: RFPercentage(2.3), height: RFPercentage(1.8) }} source={require('../../assets/images/whiteeye.png')} />
                        <Text style={{ fontSize: RFPercentage(1.6), color: Colors.white, marginLeft: RFPercentage(0.8), fontWeight: '800' }}>
                            4.5M
                        </Text>
                    </View>
                    {/* Menue */}
                    <TouchableOpacity activeOpacity={0.4} style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(2) }}>
                        <Image source={require("../../assets/images/dots.png")} />
                    </TouchableOpacity>
                    {/* Duration */}
                    <View style={{ flexDirection: 'row', position: 'absolute', bottom: RFPercentage(2), right: RFPercentage(2), backgroundColor: Colors.darkGrey2, borderRadius: RFPercentage(1), justifyContent: 'center', alignItems: 'center', width: RFPercentage(11), height: RFPercentage(3.6) }}>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(1.5), fontWeight: '600' }}>
                            10:43
                        </Text>
                    </View>
                </ImageBackground>

                {/* Page details with image */}

                <View style={{ marginTop: RFPercentage(2.8), flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {/* DP Image */}
                    <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/dp.png')} />
                    {/* Details */}
                    <View style={{ marginLeft: RFPercentage(2) }}>
                        <Text style={{ fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                            Pokémon Characters Re-Design using Maya
                        </Text>
                        <View style={{ marginTop: RFPercentage(0.8), flexDirection: 'row' }}>
                            <Text style={{ color: '#707070', fontSize: RFPercentage(1.7) }}>
                                Marquez Brownlee
                            </Text>
                            <View style={{ marginLeft: RFPercentage(2), alignSelf: 'center', backgroundColor: '#707070', width: RFPercentage(0.7), height: RFPercentage(0.7), borderRadius: RFPercentage(10) }}>
                            </View>
                            <Text style={{ marginLeft: RFPercentage(1), color: '#707070', fontSize: RFPercentage(1.7) }}>
                                5 months ago
                            </Text>
                        </View>

                    </View>
                </View>

            </View>

            {/* Bottom tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: RFPercentage(20),
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,

    }
})

export default HomeScreen;