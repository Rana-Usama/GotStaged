import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

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

            <View style={{ marginTop: RFPercentage(3), width: RFPercentage(42), height: RFPercentage(7), backgroundColor: Colors.twoButtons, borderRadius: RFPercentage(10) }}>

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