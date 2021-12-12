import React, { useState } from 'react';
import { ImageBackground, View, TouchableOpacity, Image, Text } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function VideoHomeScreen(props) {

    const [video, setVideo] = useState(true);
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <ImageBackground style={{ width: '100%', height: RFPercentage(35), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/videoImage.png')} >
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


        </Screen>
    );
}

export default VideoHomeScreen;