import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text } from 'react-native'

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

function MyChannelScreen(props) {

    const [buttons, setButtons] = useState('0');

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <ImageBackground style={{ width: '100%', height: RFPercentage(25), justifyContent: 'flex-start', alignItems: 'center' }} source={require('../../assets/images/sb.png')}>

                <View style={{ marginTop: RFPercentage(5), width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', left: RFPercentage(2), }}>
                        <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2) }} source={require('../../assets/images/notification.png')} />
                    </TouchableOpacity>
                    <Image style={{ width: RFPercentage(18), height: RFPercentage(4) }} source={require('../../assets/images/smallLogo.png')} />
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(8), }}>
                        <Image style={{ width: RFPercentage(3.5), height: RFPercentage(2.3) }} source={require('../../assets/images/vedio.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(2), }}>
                        <Image style={{ width: RFPercentage(2.4), height: RFPercentage(2.4) }} source={require('../../assets/images/search.png')} />
                    </TouchableOpacity>
                </View>

                {/* Buttons to navigate to different pages */}

                <View style={{ width: '90%', position: 'absolute', bottom: RFPercentage(5), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setButtons('1')} activeOpacity={0.6} style={{ position: 'absolute', left: 0 }} >
                        <Text style={{ color: buttons == '1' ? Colors.primary : '#707070', fontSize: RFPercentage(2.2) }}>
                            My Channel
                        </Text>
                    </TouchableOpacity>
                    {buttons == '1' ?
                        <View style={{ marginBottom: RFPercentage(-6), backgroundColor: Colors.primary, width: RFPercentage(14), height: RFPercentage(0.4) }} />
                        :
                        null
                    }

                    <TouchableOpacity onPress={() => setButtons('2')} activeOpacity={0.6} style={{ position: 'absolute', left: RFPercentage(16) }} >
                        <Text style={{ color: buttons == '2' ? Colors.primary : '#707070', fontSize: RFPercentage(2.2) }}>
                            My Videos
                        </Text>
                    </TouchableOpacity>
                    {buttons == '2' ?
                        <View style={{ marginBottom: RFPercentage(-6), backgroundColor: Colors.primary, width: RFPercentage(14), height: RFPercentage(0.4) }} />
                        :
                        null
                    }

                    <TouchableOpacity onPress={() => setButtons('3')} activeOpacity={0.6} style={{ position: 'absolute', right: RFPercentage(10) }} >
                        <Text style={{ color: buttons == '3' ? Colors.primary : '#707070', fontSize: RFPercentage(2.2) }}>
                            Payments
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setButtons('4')} activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                        <Text style={{ color: buttons == '4' ? Colors.primary : '#707070', fontSize: RFPercentage(2.2) }}>
                            About
                        </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </Screen>
    );
}

export default MyChannelScreen;