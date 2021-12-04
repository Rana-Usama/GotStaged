import React, { useState } from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function SearchScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Search Here",
            placeholderAtCenter: false,
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };


    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <ImageBackground style={{ width: '100%', height: RFPercentage(16), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/sb.png')}>
                <View style={{ alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: '90%', position: 'absolute', bottom: RFPercentage(3) }}>

                    <Ionicons name="md-arrow-back" style={{ fontSize: RFPercentage(3.7) }} color="black" />

                    {inputField.map((item, i) => (
                        <View key={i} style={{ marginLeft: RFPercentage(0.8) }} >
                            <InputField
                                placeholder={item.placeholder}
                                backgroundColor={Colors.twoButtons}
                                borderWidth={RFPercentage(0.1)}
                                placeholderAtCenter={item.placeholderAtCenter}
                                borderColor={Colors.twoButtons}
                                leftIconName={"search"}
                                height={RFPercentage(5.5)}
                                borderRadius={RFPercentage(0)}
                                fontSize={RFPercentage(2)}
                                handleFeild={(text) => handleChange(text, i)}
                                value={item.value}
                                width={"93%"}
                            />
                        </View>
                    ))}

                    <TouchableOpacity activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(-1.4), width: RFPercentage(5.4), height: RFPercentage(5.4), borderRadius: RFPercentage(20), backgroundColor: Colors.twoButtons }}>
                        <Image style={{ width: RFPercentage(1.6), height: RFPercentage(3.1) }} source={require('../../assets/images/sp.png')} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>

            {/* Bottom tab */}
            < BottomTab props={props} />

        </Screen>
    );
}

export default SearchScreen;