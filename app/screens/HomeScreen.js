import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const [active, setActive] = useState('1');

    const cartData = [
        {
            thumbnailSource: require('../../assets/images/vimage1.png'),
            dpImageSource: require('../../assets/images/dp.png'),
            views: '4.5M',
            time: '10:43',
            mainTitle: 'Pokémon Characters Re-Design using Maya',
            subTitle: 'Marquez Brownlee',
            duration: '5 months ago',
        },
        {
            thumbnailSource: require('../../assets/images/vimage2.png'),
            dpImageSource: require('../../assets/images/dp2.png'),
            views: '1.8M',
            time: '07:15',
            mainTitle: 'Creating Seamless Loop Animation | BLENDER!',
            subTitle: 'Shane Martinez',
            duration: '3 days ago',
        },
        {
            thumbnailSource: require('../../assets/images/vimage3.png'),
            dpImageSource: require('../../assets/images/dp3.png'),
            views: '1.8M',
            time: '07:15',
            mainTitle: 'Wandering thoughts | Relaxing Piano',
            subTitle: 'Soothing Relaxation',
            duration: '2 days ago',
        },
    ]

    const horizentalCartdata = [
        {
            thumbnailSource: require('../../assets/images/hcart1.png'),
            dpImageSource: require('../../assets/images/profile1.png'),
            views: '0.5M',
            mainTitle: 'Can I get 1 Million Views',
            subTitle: 'Dominic Carver',
        },
        {
            thumbnailSource: require('../../assets/images/hcart2.png'),
            dpImageSource: require('../../assets/images/profile2.png'),
            views: '0.5M',
            mainTitle: 'Can I get 1 Million Views',
            subTitle: 'Dominic Carver',
        },
        {
            thumbnailSource: require('../../assets/images/hcart3.png'),
            dpImageSource: require('../../assets/images/profile3.png'),
            views: '0.5M',
            mainTitle: 'Can I get 1 Million Views',
            subTitle: 'Dominic Carver',
        }
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* NavBar */}

            <ImageBackground style={{ width: '100%', height: RFPercentage(16) }} source={require('../../assets/images/back.png')}>
                <View style={{ position: 'absolute', bottom: RFPercentage(4), width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', left: RFPercentage(2), }}>
                        <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2) }} source={require('../../assets/images/notification.png')} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/smallLogo.png')} />
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(8), }}>
                        <Image style={{ width: RFPercentage(3.5), height: RFPercentage(2.3) }} source={require('../../assets/images/vedio.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(2), }}>
                        <Image style={{ width: RFPercentage(2.4), height: RFPercentage(2.4) }} source={require('../../assets/images/search.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* Top buttons */}

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(3), width: "90%", height: RFPercentage(7), backgroundColor: Colors.twoButtons, borderRadius: RFPercentage(10) }}>
                <TouchableOpacity onPress={() => setActive('1')} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', width: "45%", height: RFPercentage(5), backgroundColor: active == '1' ? Colors.white : Colors.twoButtons, borderRadius: RFPercentage(10) }}>
                    <Text style={{ color: active == '1' ? Colors.black : '#707070', fontSize: RFPercentage(1.8), fontWeight: '500' }}>
                        FEED
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActive('2')} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2), width: "45%", height: RFPercentage(5), backgroundColor: active == '2' ? Colors.white : Colors.twoButtons, borderRadius: RFPercentage(10) }}>
                    <Text style={{ color: active == '2' ? Colors.black : '#707070', fontSize: RFPercentage(1.8), fontWeight: '500' }}>
                        SUBSCRIPTIONS
                    </Text>
                </TouchableOpacity>
            </View>

            {/*Vedio Cart */}

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>

                    {cartData.map((item, i) => (
                        <View key={i} style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            {i == 2 ?

                                <View style={{ width: '100%' }}>

                                    {/* Rising talent Text and horizental scroll */}
                                    <View style={{ alignSelf: 'center', marginTop: RFPercentage(3), flexDirection: 'row', width: '90%', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: '600' }}>
                                            Rising Talent
                                        </Text>
                                        {/* menue */}
                                        <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0, flexDirection: 'row' }}>
                                            <View style={styles.dots} />
                                            <View style={[styles.dots, { marginLeft: RFPercentage(0.4) }]} />
                                            <View style={[styles.dots, { marginLeft: RFPercentage(0.4) }]} />
                                        </TouchableOpacity>
                                    </View>

                                    {/* Horizental Scrolling carts */}

                                    <ScrollView horizontal={true} style={{ marginTop: RFPercentage(3), width: '100%', backgroundColor: Colors.white }}>
                                        <View style={{ width: "70%", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <View style={{ marginLeft: RFPercentage(2), marginBottom: RFPercentage(3), width: '100%', alignSelf: 'center' }}>

                                                <View style={{ marginTop: RFPercentage(-5), flexDirection: 'row', width: '90%', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                    {horizentalCartdata.map((item, i) => (
                                                        <View key={i} style={{ marginLeft: !i == 0 ? RFPercentage(2) : 0, width: '50%', justifyContent: 'flex-start', alignItems: 'center' }}>

                                                            {/*Thumbnail of vedio */}
                                                            <ImageBackground style={{ overflow: 'hidden', borderRadius: RFPercentage(2), marginTop: RFPercentage(5), alignSelf: 'center', width: '100%', height: RFPercentage(22) }} source={item.thumbnailSource}>
                                                                {/* Views and eye icon */}
                                                                <View style={{ flexDirection: 'row', position: 'absolute', top: RFPercentage(2), left: RFPercentage(2), borderRadius: RFPercentage(3), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(4.2) }}>
                                                                    {/* empty view for background opacity */}
                                                                    <View style={{ borderRadius: RFPercentage(3), position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.1)" }} />
                                                                    <Image style={{ width: RFPercentage(2.3), height: RFPercentage(1.8) }} source={require('../../assets/images/whiteeye.png')} />
                                                                    <Text style={{ fontSize: RFPercentage(1.6), color: Colors.white, marginLeft: RFPercentage(0.8), fontWeight: '800' }}>
                                                                        {item.views}
                                                                    </Text>
                                                                </View>
                                                            </ImageBackground>

                                                            {/* Page details with image */}
                                                            <View style={{ marginTop: RFPercentage(1.6), flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                                {/* DP Image */}
                                                                <TouchableOpacity activeOpacity={0.5}>
                                                                    <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={item.dpImageSource} />
                                                                </TouchableOpacity>
                                                                {/* Details */}
                                                                <View style={{ marginLeft: RFPercentage(1.2) }}>
                                                                    <Text style={{ opacity: 0.5, fontWeight: '600', fontSize: RFPercentage(1.6) }}>
                                                                        {item.mainTitle}
                                                                    </Text>
                                                                    <View style={{ marginTop: RFPercentage(0.3), flexDirection: 'row' }}>
                                                                        <Text style={{ opacity: 0.6, color: '#707070', fontSize: RFPercentage(1.5) }}>
                                                                            {item.subTitle}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    ))}
                                                </View>

                                            </View>
                                        </View>
                                    </ScrollView>

                                </View> : null
                            }

                            <View key={i} style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>

                                {/*Thumbnail of vedio */}
                                <ImageBackground style={{ overflow: 'hidden', borderRadius: RFPercentage(2), marginTop: RFPercentage(5), alignSelf: 'center', width: '100%', height: RFPercentage(30) }} source={item.thumbnailSource}>
                                    <View style={{ flexDirection: 'row', position: 'absolute', top: RFPercentage(2), left: RFPercentage(2), backgroundColor: Colors.darkGrey2, borderRadius: RFPercentage(3), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(4.2) }}>
                                        <Image style={{ width: RFPercentage(2.3), height: RFPercentage(1.8) }} source={require('../../assets/images/whiteeye.png')} />
                                        <Text style={{ fontSize: RFPercentage(1.6), color: Colors.white, marginLeft: RFPercentage(0.8), fontWeight: '800' }}>
                                            {item.views}
                                        </Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.4} style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(2) }}>
                                        <Image source={require("../../assets/images/dots.png")} />
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', position: 'absolute', bottom: RFPercentage(2), right: RFPercentage(2), backgroundColor: Colors.darkGrey2, borderRadius: RFPercentage(1), justifyContent: 'center', alignItems: 'center', width: RFPercentage(11), height: RFPercentage(3.6) }}>
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(1.5), fontWeight: '600' }}>
                                            {item.time}
                                        </Text>
                                    </View>
                                </ImageBackground>

                                {/* Page details with image */}

                                <View style={{ marginTop: RFPercentage(2.8), flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={0.5}>
                                        <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={item.dpImageSource} />
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: RFPercentage(2) }}>
                                        <Text style={{ fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                                            {item.mainTitle}
                                        </Text>
                                        <View style={{ marginTop: RFPercentage(0.8), flexDirection: 'row' }}>
                                            <Text style={{ color: '#707070', fontSize: RFPercentage(1.7) }}>
                                                {item.subTitle}
                                            </Text>
                                            <View style={{ marginLeft: RFPercentage(2), alignSelf: 'center', backgroundColor: '#707070', width: RFPercentage(0.7), height: RFPercentage(0.7), borderRadius: RFPercentage(10) }}>
                                            </View>
                                            <Text style={{ marginLeft: RFPercentage(1), color: '#707070', fontSize: RFPercentage(1.7) }}>
                                                {item.duration}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))
                    }

                    {/* for margin */}
                    <View style={{ marginBottom: RFPercentage(20) }} />
                </View >
            </ScrollView >

            {/* Bottom tab */}
            < BottomTab props={props} />
        </Screen >
    );
}

const styles = StyleSheet.create({
    dots: {
        backgroundColor: Colors.black,
        width: RFPercentage(0.5),
        height: RFPercentage(0.5),
        borderRadius: RFPercentage(10)
    }
})

export default HomeScreen;