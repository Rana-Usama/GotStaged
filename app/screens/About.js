import React from 'react';
import { View, Text, Platform } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';

function About(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <View style={{ width: '90%', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8), fontWeight: Platform.OS === 'android' ? 'bold' : '700' }} >
                    Discription
                </Text>
            </View>
        </Screen>
    );
}

export default About;