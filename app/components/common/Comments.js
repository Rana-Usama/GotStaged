import React, { useState } from 'react';
import { TouchableOpacity, Image, ImageBackground, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../Screen';
//config
import Colors from '../../config/Colors';

function Comments({ imageSource, comment, userName }) {

    const [heart, setHeart] = useState(false);

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <TouchableOpacity onPress={() => setHeart(true)} hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }} style={{ position: 'absolute', right: RFPercentage(3), top: RFPercentage(4) }}  >
                {heart ?
                    <TouchableOpacity hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }} onPress={() => setHeart(false)} >
                        <MaterialCommunityIcons name="cards-heart" style={{ fontSize: RFPercentage(2.2) }} color={Colors.primary} />
                    </TouchableOpacity>
                    :
                    <MaterialCommunityIcons name="heart-outline" style={{ fontSize: RFPercentage(2.2) }} color={"black"} />
                }
            </TouchableOpacity>

            <View style={{ marginTop: RFPercentage(2.8), flexDirection: 'row', width: '100%', marginLeft: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center' }}>

                <TouchableOpacity activeOpacity={0.8}>
                    <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={imageSource} />
                </TouchableOpacity>

                <View style={{ marginLeft: RFPercentage(1), justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
                    <Text style={{ position: 'absolute', right: 0 }} >
                        heart
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                            {userName}
                        </Text>
                        <View style={{ marginLeft: RFPercentage(2), width: RFPercentage(0.5), height: RFPercentage(0.5), borderRadius: RFPercentage(10), backgroundColor: Colors.grey }} />
                        <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(1.6), color: '#707070' }} >
                            {comment}
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
        </Screen>
    );
}

export default Comments;