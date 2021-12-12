import React, { useState } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from './../components/common/BottomTab';
import InputField from './../components/common/InputField';
//config
import Colors from '../config/Colors';
import MyAppButton from './../components/common/MyAppButton';

function StartAConcert(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Title goes here",
            backgroundColor: Colors.white,
            borderRightColor: Colors.white,
            borderTopColor: Colors.white,
            borderLeftColor: Colors.white,
            borderBottomColor: Colors.newInputFieldBorder,
            placeholderAtCenter: false,
            height: RFPercentage(7.4),
            value: "",
        },
        {
            placeholder: "Description",
            backgroundColor: "#FAFAFA",
            atStartPlaceholder: true,
            title: 'Description',
            height: RFPercentage(22),
            placeholderAtCenter: false,
            value: "",
        },
        {
            placeholder: "Enter ticket price",
            backgroundColor: Colors.white,
            title: 'Ticket Price',
            icon: true,
            borderRightColor: Colors.white,
            borderTopColor: Colors.white,
            borderLeftColor: Colors.white,
            borderBottomColor: Colors.newInputFieldBorder,
            placeholderAtCenter: false,
            height: RFPercentage(7.4),
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };


    const [selectedItem, setItem] = useState('')

    const items = [
        { label: "Category 1", value: "Category 1" },
        { label: "Category 2", value: "Category 2" },
    ]

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }


    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(3) }} >
                <Text style={{ fontSize: RFPercentage(2.7), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                    Start a concert
                </Text>
                <Entypo name="cross" style={{ fontSize: RFPercentage(3.5), position: 'absolute', right: 0 }} color={Colors.black} />
            </View>

            {/* InputFields along with the picker component */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ marginTop: RFPercentage(3), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {inputField.map((item, i) => (
                        <View key={i} style={{ marginLeft: RFPercentage(0.8) }} >
                            {i == 1 ?
                                // Picker
                                <View style={{ marginTop: RFPercentage(5), width: '90%', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                                            Select a Category
                                        </Text>
                                        <Text style={{ fontSize: RFPercentage(2.5), marginLeft: RFPercentage(1.2), color: '#C2C2C2' }} >
                                            (Optional)
                                        </Text>
                                    </View>
                                    <ReactNativeCrossPicker
                                        modalTextStyle={{ color: "rgb(0, 74, 173)" }}
                                        mainComponentStyle={{ width: "100%", borderWidth: 0, backgroundColor: "#FAFAFA", height: RFPercentage(9), marginTop: RFPercentage(3) }}
                                        modalComponentStyle={{ borderRadius: RFPercentage(3), backgroundColor: Colors.white, borderColor: Colors.black, borderWidth: RFPercentage(0.1) }}
                                        iconComponent={iconComponent}
                                        placeholderStyle={{ color: "black", fontSize: RFPercentage(2) }}
                                        modalTextStyle={{ color: "#12424a", fontSize: RFPercentage(2.6), fontWeight: 'bold' }}
                                        items={items}
                                        setItem={setItem} selectedItem={selectedItem}
                                        placeholder="Entertainment"
                                        modalMarginTop={"70%"}
                                    />
                                </View>
                                :
                                null
                            }
                            {/* Input Fields */}
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                                <Text style={{ marginTop: i == 0 ? RFPercentage(0) : RFPercentage(3), marginBottom: i == 1 ? RFPercentage(1) : RFPercentage(0), fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }}>
                                    {item.title}
                                </Text>
                                {item.icon ?
                                    <AntDesign name="exclamationcircle" style={{ fontSize: RFPercentage(2.1), marginTop: RFPercentage(3), marginLeft: RFPercentage(1) }} color={Colors.primary} />
                                    :
                                    null
                                }
                            </View>
                            <InputField
                                placeholder={item.placeholder}
                                backgroundColor={item.backgroundColor}
                                atStartPlaceholder={item.atStartPlaceholder}
                                borderBottomColor={item.borderBottomColor}
                                borderRightColor={item.borderRightColor}
                                borderTopColor={item.borderTopColor}
                                borderLeftColor={item.borderLeftColor}
                                borderWidth={RFPercentage(0.1)}
                                placeholderAtCenter={item.placeholderAtCenter}
                                height={item.height}
                                borderRadius={RFPercentage(1)}
                                fontSize={RFPercentage(2)}
                                handleFeild={(text) => handleChange(text, i)}
                                value={item.value}
                                width={"95%"}
                            />
                        </View>
                    ))}
                </View>
                <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4), marginBottom: RFPercentage(16) }}>
                    <MyAppButton
                        title="Submit"
                        padding={RFPercentage(1.8)}
                        // onPress={() => handleLogin()}
                        backgroundColor={Colors.primary}
                        color={Colors.white}
                        bold={false}
                        borderRadius={RFPercentage(1)}
                        width={"90%"}
                    />
                </View>
            </ScrollView>

            {/* Bottom tab */}
            < BottomTab props={props} />
        </Screen>
    );
}

export default StartAConcert;