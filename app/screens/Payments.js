import React from 'react';
import { View, Text, Image, ImageBackground, Platform } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import MyAppButton from '../components/common/MyAppButton';
//config
import Colors from '../config/Colors';

function Payments(props) {
    return (
        <View style={{ width: '90%', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(2) }} >

            <Text style={{ color: Colors.primary, fontSize: RFPercentage(4.5), fontWeight: 'bold' }} >
                $1128
            </Text>

            <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, marginTop: RFPercentage(1.6) }} >
                Personal Balance
            </Text>

            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
                <MyAppButton
                    title="Withdraw"
                    padding={RFPercentage(1.5)}
                    // onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"100%"}
                />
            </View>

            <View style={{ marginTop: RFPercentage(5), width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Earning Overview
                </Text>

            </View>


        </View>
    );
}

export default Payments;