import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';
import InputField from './../components/common/InputField';
import BottomTab from '../components/common/BottomTab';

function ManageAddScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Paste your link here",
            backgroundColor: Colors.white,
            title: 'Webiste Link',
            icon: true,
            borderRightColor: Colors.white,
            borderTopColor: Colors.white,
            borderLeftColor: Colors.white,
            borderBottomColor: Colors.newInputFieldBorder,
            placeholderAtCenter: false,
            placeLeft: true,
            height: RFPercentage(4),
            value: "",
        },
        {
            placeholder: "Enter the ad title",
            backgroundColor: Colors.white,
            title: 'Ad Title',
            icon: true,
            borderRightColor: Colors.white,
            borderTopColor: Colors.white,
            borderLeftColor: Colors.white,
            borderBottomColor: Colors.newInputFieldBorder,
            placeholderAtCenter: false,
            placeLeft: true,
            height: RFPercentage(4),
            value: "",
        },
        {
            placeholder: "Enter the Discription",
            backgroundColor: Colors.white,
            title: 'Ad Discription',
            icon: true,
            borderRightColor: Colors.white,
            borderTopColor: Colors.white,
            borderLeftColor: Colors.white,
            borderBottomColor: Colors.newInputFieldBorder,
            placeholderAtCenter: false,
            placeLeft: true,
            height: RFPercentage(4),
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const pickerData = [
        {
            title: 'Ad Type',
            placeholder: 'Promote Link'
        },
        {
            title: 'Display Image / Video',
            placeholder: 'Display Video'
        },
    ]


    const [selectedItem, setItem] = useState('')

    const items = [
        { label: "Category 1", value: "Category 1" },
        { label: "Category 2", value: "Category 2" },
    ]

    const [selectedItem2, setItem2] = useState('')

    const items2 = [
        { label: "Category 1", value: "Category 1" },
        { label: "Category 2", value: "Category 2" },
    ]

    const [selectedItem3, setItem3] = useState('')

    const items3 = [
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

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "flex-start", backgroundColor: Colors.white }}>

            <View style={{ width: '90%', alignSelf: 'center', marginTop: RFPercentage(2) }} >
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2) }} source={require('../../assets/images/notification.png')} />
                </TouchableOpacity>

                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.7), fontWeight: Platform.OS == 'android' ? 'bold' : '700', marginTop: RFPercentage(3.5) }} >
                    Manage Your Add Display
                </Text>

                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), marginTop: RFPercentage(1) }} >
                    Display a Link or Play an ad before Video Starts
                </Text>

            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Pickers */}

                    {pickerData.map((item, i) => (
                        <View key={i} style={{ marginTop: RFPercentage(3), width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
                                <Text style={{ fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                                    {item.title}
                                </Text>
                            </View>
                            <ReactNativeCrossPicker
                                modalTextStyle={{ color: "rgb(0, 74, 173)" }}
                                mainComponentStyle={{ width: "96%", borderWidth: 0, backgroundColor: "#FAFAFA", height: RFPercentage(6.5), marginTop: RFPercentage(2) }}
                                modalComponentStyle={{ borderRadius: RFPercentage(3), backgroundColor: Colors.white, borderColor: Colors.black, borderWidth: RFPercentage(0.1) }}
                                iconComponent={iconComponent}
                                placeholderStyle={{ color: "black", fontSize: RFPercentage(2) }}
                                modalTextStyle={{ color: "#12424a", fontSize: RFPercentage(2.6), fontWeight: 'bold' }}
                                items={i == 0 ? items : items2}
                                setItem={i == 0 ? setItem : setItem2} selectedItem={i == 0 ? selectedItem : selectedItem2}
                                placeholder={item.placeholder}
                                modalMarginTop={"70%"}
                            />
                        </View>
                    ))}

                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', marginTop: RFPercentage(3) }} >
                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                            Upload Video
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: '90%', height: RFPercentage(7), borderRadius: RFPercentage(1), backgroundColor: '#FAFAFA', marginTop: RFPercentage(2) }}>
                        <Feather name="upload-cloud" style={{ fontSize: RFPercentage(3.5) }} color="#909090" />
                    </TouchableOpacity>

                    {/* Input Fields */}
                    {inputField.map((item, i) => (
                        <View key={i} style={{ alignSelf: 'center', marginTop: i == 0 ? RFPercentage(4) : RFPercentage(0) }} >
                            {/* Input Fields */}
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                                <Text style={{ marginTop: i == 0 ? RFPercentage(0) : RFPercentage(3), marginBottom: RFPercentage(0.5), fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }}>
                                    {item.title}
                                </Text>
                            </View>
                            <InputField
                                placeholder={item.placeholder}
                                placeLeft={item.placeLeft}
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

                    {/* Last Picker */}

                    <View style={{ marginTop: RFPercentage(4), width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
                            <Text style={{ fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                                Select Button
                            </Text>
                        </View>
                        <ReactNativeCrossPicker
                            modalTextStyle={{ color: "rgb(0, 74, 173)" }}
                            mainComponentStyle={{ width: "96%", borderWidth: 0, backgroundColor: "#FAFAFA", height: RFPercentage(6.5), marginTop: RFPercentage(2) }}
                            modalComponentStyle={{ borderRadius: RFPercentage(3), backgroundColor: Colors.white, borderColor: Colors.black, borderWidth: RFPercentage(0.1) }}
                            iconComponent={iconComponent}
                            placeholderStyle={{ color: "black", fontSize: RFPercentage(2) }}
                            modalTextStyle={{ color: "#12424a", fontSize: RFPercentage(2.6), fontWeight: 'bold' }}
                            items={items3}
                            setItem={setItem3} selectedItem={selectedItem3}
                            placeholder='Learn more'
                            modalMarginTop={"70%"}
                        />
                    </View>

                    {/* Buttons */}
                    <View style={{ alignSelf: 'center', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(5), marginBottom: RFPercentage(10) }}>
                        <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), height: RFPercentage(6), borderRadius: RFPercentage(1), backgroundColor: Colors.primary }}>
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.9) }}>
                                Confirm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), borderRadius: RFPercentage(1), height: RFPercentage(6), backgroundColor: Colors.white, borderColor: "#757575", borderWidth: RFPercentage(0.1) }}>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9) }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

            {/* BottomTab */}
            <BottomTab props={props} />


        </Screen>
    );
}

export default ManageAddScreen;