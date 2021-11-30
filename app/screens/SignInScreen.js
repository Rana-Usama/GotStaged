import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function SignInScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            {/* Top Logo */}
            <Image style={{ marginTop: RFPercentage(6) }} source={require('../../assets/images/logoText.png')} />

            {/* Login Text */}
            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'flex-start', width: '82%', marginTop: RFPercentage(7) }}>
                <Text style={{ color: Colors.black, fontSize: RFPercentage(3.5), fontWeight: 'bold' }}>
                    Login
                </Text>
            </View>

            {/* Social Links */}
            <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(4) }}>
                {/* Google Link */}
                <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(23), height: RFPercentage(6.5), borderRadius: RFPercentage(1), borderColor: Colors.blue, borderWidth: RFPercentage(0.1) }}>
                    <Image source={require('../../assets/images/google.png')} />
                </TouchableOpacity>

                {/* Apple Link */}
                <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: RFPercentage(1.5), justifyContent: 'center', alignItems: 'center', width: RFPercentage(23), height: RFPercentage(6.5), borderRadius: RFPercentage(1), borderColor: Colors.black, borderWidth: RFPercentage(0.1) }}>
                    <Image source={require('../../assets/images/apple.png')} />
                </TouchableOpacity>
            </View>

            {/* Saperation Line] */}
            <View style={{ marginTop: RFPercentage(5), width: '60%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: Colors.darkGrey, width: RFPercentage(22), height: RFPercentage(0.1) }} />
                <Text style={{ marginLeft: RFPercentage(1), marginRight: RFPercentage(1), color: Colors.darkGrey, fontSize: RFPercentage(2.5) }}>
                    or
                </Text>
                <View style={{ backgroundColor: Colors.darkGrey, width: RFPercentage(22), height: RFPercentage(0.1) }} />
            </View>

        </Screen>
    );
}

export default SignInScreen;