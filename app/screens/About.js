import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//config
import Colors from '../config/Colors';

function About(props) {

    const linksData = [
        {
            icon: 'facebook-square',
            link: 'www.facebook.com/Gibson_Musics'
        },
        {
            icon: 'instagram-square',
            link: 'www.Instagram.com/Gibson_Musics'
        },
        {
            icon: 'twitter-square',
            link: 'www.twitter.com/Gibson_Musics'
        },
    ]

    return (
        <View style={{ width: '90%', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(2) }} >
            <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8), fontWeight: Platform.OS === 'android' ? 'bold' : '700' }} >
                Discription
            </Text>

            <Text style={{ color: '#272727', fontSize: RFPercentage(2), lineHeight: RFPercentage(4), marginTop: RFPercentage(2) }} >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Ae nean commodo ligula eget dolor. Aenean massa.
                Cum socii s natoque penatibus et magnis dis parturient montes,
                nasc etur ridiculus mus. Donec quam felis, ultricies nec,
                pellentes que eu, pretium qu
            </Text>

            <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8), fontWeight: Platform.OS === 'android' ? 'bold' : '700', marginTop: RFPercentage(2) }} >
                Links
            </Text>

            {/* Links */}
            {
                linksData.map((item, i) => (
                    <View key={i} style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: RFPercentage(2), alignSelf: 'center', width: '100%', height: RFPercentage(7), borderRadius: RFPercentage(1), backgroundColor: '#FAFAFA' }} >
                        <FontAwesome5 name={item.icon} style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(4) }} color={Colors.primary} />
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={{ color: '#272727', fontSize: RFPercentage(1.9), marginLeft: RFPercentage(3) }} >
                                {item.link}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', right: RFPercentage(6) }} >
                            <FontAwesome5 name="external-link-alt" style={{ fontSize: RFPercentage(1.9) }} color={Colors.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', right: RFPercentage(2) }} >
                            <MaterialIcons name="content-copy" style={{ fontSize: RFPercentage(1.9) }} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                ))
            }

            <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8), fontWeight: Platform.OS === 'android' ? 'bold' : '700', marginTop: RFPercentage(2) }} >
                More Info
            </Text>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', marginTop: RFPercentage(2), alignItems: 'center' }} >
                <AntDesign name="exclamationcircle" style={{ fontSize: RFPercentage(2.1), marginLeft: RFPercentage(1) }} color={Colors.primary} />
                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2), color: '#272727' }} >
                    Joined January, 2021
                </Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', marginTop: RFPercentage(4), marginBottom: RFPercentage(15), alignItems: 'center' }} >
                <Ionicons name="location" style={{ fontSize: RFPercentage(2.4), marginLeft: RFPercentage(1) }} color={Colors.primary} />
                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2), color: '#272727' }} >
                    USA
                </Text>
            </View>

        </View>
    );
}

export default About;