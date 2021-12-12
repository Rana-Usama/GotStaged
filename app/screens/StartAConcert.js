import React from 'react';
import { View, Text, Image, Platform, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';

function StartAConcert(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(3) }} >
                <Text style={{ fontSize: RFPercentage(2.7), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                    Start a concert
                </Text>
                <Entypo name="cross" style={{ fontSize: RFPercentage(3.5), position: 'absolute', right: 0 }} color={Colors.black} />
            </View>

            {/* <TextInput placeholder='title goes here'>

            </TextInput> */}
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', backgroundColor: Colors.white, width: '90%', height: RFPercentage(6), borderBottomColor: Colors.newInputFieldBorder, borderLeftColor: Colors.white, borderTopColor: Colors.white, borderRightColor: Colors.white, borderWidth: RFPercentage(0.4) }}>
                <TextInput placeholder='Title goes here' placeholderTextColor={Colors.newInputFieldBorder} />


            </View>
        </Screen>
    );
}

export default StartAConcert;