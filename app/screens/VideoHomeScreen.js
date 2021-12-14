import React, { useState } from 'react';
import { ImageBackground, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import MyAppButton from './../components/common/MyAppButton';

function VideoHomeScreen(props) {

    const [color, setColor] = useState('0');

    const [active, setActive] = useState('1');

    const [video, setVideo] = useState(true);

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <ImageBackground style={{ width: '100%', height: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/videoImage.png')} >
                <View style={{ width: RFPercentage(34), alignSelf: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                    {/* Previous */}
                    <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', left: 0 }} >
                        <SimpleLineIcons name="control-start" style={{ fontSize: RFPercentage(6), fontWeight: 'bold' }} color={Colors.white} />
                    </TouchableOpacity>
                    {/* Play & Pause */}
                    <TouchableOpacity onPress={() => setVideo(true)} activeOpacity={0.6}>
                        {video ?
                            <SimpleLineIcons onPress={() => setVideo(false)} name="control-play" style={{ fontSize: RFPercentage(6), fontWeight: 'bold' }} color={Colors.white} />
                            :
                            <SimpleLineIcons name="control-pause" style={{ fontSize: RFPercentage(6), fontWeight: 'bold' }} color={Colors.white} />
                        }
                    </TouchableOpacity>
                    {/* Next */}
                    <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                        <SimpleLineIcons name="control-end" style={{ fontSize: RFPercentage(6), fontWeight: 'bold' }} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* DP with subscibers detail */}
            <View style={{ marginTop: RFPercentage(2.8), flexDirection: 'row', width: '100%', marginLeft: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/ndp.png')} />
                </TouchableOpacity>
                <View style={{ marginLeft: RFPercentage(1) }}>
                    <Text style={{ fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                        Beatboxing for 12 Hours Straight | Marquez
                    </Text>
                    <View style={{ marginTop: RFPercentage(0.6), flexDirection: 'row' }}>
                        <Text style={{ color: '#707070', fontSize: RFPercentage(1.7) }}>
                            356,985,624 views
                        </Text>
                    </View>
                </View>
            </View>

            {/* like dislike buttons */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ marginTop: RFPercentage(1.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => setColor('1')} activeOpacity={0.7} style={{ width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '1' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                            {/* <Ionicons name="warning" size={24} color="black" /> */}
                            <MaterialCommunityIcons name='cards-heart' style={{ fontSize: RFPercentage(4) }} color={color == '1' ? Colors.primary : Colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setColor('2')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '2' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                            <MaterialCommunityIcons name='heart-off' style={{ fontSize: RFPercentage(4) }} color={color == '2' ? Colors.primary : Colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setColor('3')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '3' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                            <MaterialCommunityIcons name='share' style={{ fontSize: RFPercentage(4) }} color={color == '3' ? Colors.primary : Colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setColor('4')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '4' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                            <MaterialCommunityIcons name='playlist-plus' style={{ fontSize: RFPercentage(4) }} color={color == '4' ? Colors.primary : Colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setColor('5')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '5' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                            <Ionicons name="warning" style={{ fontSize: RFPercentage(4) }} color={color == '5' ? Colors.primary : Colors.black} />
                        </TouchableOpacity>
                    </View>

                    {/* Subscribe button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(2.3), marginBottom: RFPercentage(16) }}>
                        <MyAppButton
                            title="Subscribe"
                            padding={RFPercentage(1.5)}
                            // onPress={() => handleLogin()}
                            backgroundColor={Colors.primary}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1)}
                            width={"95%"}
                        />
                    </View>


                </View>
            </ScrollView>

            {/* Bottom Comments Component container */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', bottom: 0, height: RFPercentage(38), width: '100%', backgroundColor: Colors.white, borderTopRightRadius: RFPercentage(5), borderTopLeftRadius: RFPercentage(5), borderTopColor: Colors.newInputFieldBorder, borderBottomColor: Colors.white, borderLeftColor: Colors.newInputFieldBorder, borderRightColor: Colors.newInputFieldBorder, borderWidth: RFPercentage(0.2) }} >
                <Image style={{ marginTop: RFPercentage(1), width: RFPercentage(14), height: RFPercentage(0.5) }} source={require('../../assets/images/l1.png')} />

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2), width: "90%", height: RFPercentage(7), backgroundColor: '#FAFAFA', borderRadius: RFPercentage(10) }}>
                    <TouchableOpacity onPress={() => setActive('1')} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', width: "50%", height: RFPercentage(6), backgroundColor: active == '1' ? Colors.primary : "#FAFAFA", borderRadius: RFPercentage(10) }}>
                        <Text style={{ color: active == '1' ? Colors.white : Colors.black, fontSize: RFPercentage(1.8), fontWeight: '500' }}>
                            UP NEXT
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActive('2')} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2), width: "50%", height: RFPercentage(6), backgroundColor: active == '2' ? Colors.primary : "#FAFAFA", borderRadius: RFPercentage(10) }}>
                        <Text style={{ color: active == '2' ? Colors.white : Colors.black, fontSize: RFPercentage(1.8), fontWeight: '500' }}>
                            COMMENTS
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        <View style={{ marginTop: RFPercentage(2.8), flexDirection: 'row', width: '100%', marginLeft: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/ndp.png')} />
                            </TouchableOpacity>

                            <View style={{ marginLeft: RFPercentage(1), justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
                                <Text style={{ position: 'absolute', right: 0 }} > heart</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                                        Eastwood
                                    </Text>
                                    <View style={{ marginLeft: RFPercentage(2), width: RFPercentage(0.5), height: RFPercentage(0.5), borderRadius: RFPercentage(10), backgroundColor: Colors.grey }} />
                                    <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(1.6), color: '#707070' }} >
                                        Nailed it!
                                    </Text>
                                </View>
                                <View style={{ marginTop: RFPercentage(0.6), flexDirection: 'row' }}>
                                    <Text style={{ color: '#707070', fontSize: RFPercentage(1.5) }}>
                                        2 Days
                                    </Text>
                                    <Text style={{ marginLeft: RFPercentage(3), color: '#707070', fontSize: RFPercentage(1.5) }}>
                                        57 Likes
                                    </Text>
                                    <Text style={{ marginLeft: RFPercentage(3), color: '#707070', fontSize: RFPercentage(1.5) }}>
                                        Reply
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>

            </View>

        </Screen>
    );
}

export default VideoHomeScreen;