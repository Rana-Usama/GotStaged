import React, { useState, useCallback } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider'

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
//config
import Colors from '../config/Colors';
import BottomTab from '../components/common/BottomTab';

function AdvertisementScreen(props) {

    const [sliderValue, setSliderValue] = useState(0);


    const pickerData = [
        {
            title: 'Audience Location',
            placeholder: 'USA, Texas'
        },
        {
            title: 'Audience Category',
            placeholder: 'Entertainment'
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
        { label: "3 Days", value: "3 Days" },
        { label: "4 Days", value: "4 Days" },
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

            {/* nav */}
            <View style={{ width: '90%', alignSelf: 'center', marginTop: RFPercentage(2) }} >
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2) }} source={require('../../assets/images/notification.png')} />
                </TouchableOpacity>

                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.7), fontWeight: Platform.OS == 'android' ? 'bold' : '700', marginTop: RFPercentage(3.5) }} >
                    Advertisement
                </Text>
            </View>


            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', marginTop: RFPercentage(3) }} >
                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                            Ad Display
                        </Text>
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(3) }}>
                        <MyAppButton
                            title="Manage Ad Display"
                            padding={RFPercentage(1.4)}
                            // onPress={() => handleLogin()}
                            backgroundColor={Colors.primary}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1)}
                            width={"90%"}
                        />
                    </View>

                    {/* Pickers */}

                    {pickerData.map((item, i) => (
                        <View key={i} style={{ marginTop: RFPercentage(3), width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <View style={{ alignSelf: 'flex-start', flexDirection: 'row', marginTop: i == 2 ? RFPercentage(6) : 0 }}>
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

                    {/* Meter */}
                    <View style={{ marginTop: RFPercentage(7), flexDirection: 'row', alignSelf: 'center', width: '90%', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ width: '55%' }} >
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), lineHeight: RFPercentage(3) }} >
                                Congratulations! Your Audience Selection is great.
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                            <Image style={{ height: RFPercentage(14.1), width: RFPercentage(21) }} source={require('../../assets/images/meter.png')} />
                        </TouchableOpacity>
                    </View>

                    {/* Price Selector */}
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', marginTop: RFPercentage(6) }} >
                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                            Select Price
                        </Text>
                    </View>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: RFPercentage(1) }} >
                        <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: Colors.black }} >
                            ${sliderValue.toFixed()}
                        </Text>
                        <TouchableOpacity activeOpacity={0.6} >
                            <MaterialIcons name="edit" style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2.8) }} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }} > */}
                    <View style={{ flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#ecf0f1', }} >
                        <Slider
                            style={{ width: 200, height: 40 }}
                            minimumValue={0}
                            maximumValue={500}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                            value={sliderValue}
                            onValueChange={
                                (sliderValue) => setSliderValue(sliderValue)
                            }
                        />
                    </View>
                    {/* </View> */}

                    {/* Last Picker */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ alignSelf: 'flex-start', flexDirection: 'row', marginTop: RFPercentage(4) }}>
                            <Text style={{ fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                                Ad Runtime
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
                            placeholder='3 Days'
                            modalMarginTop={"70%"}
                        />
                    </View>

                    <View style={{ width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: RFPercentage(2.8) }} >
                        <EvilIcons name="exclamation" style={{ fontSize: RFPercentage(2.6) }} color="#5E5E5E" />
                        <Text style={{ color: '#5E5E5E', fontSize: RFPercentage(1.9), marginLeft: RFPercentage(1) }} >
                            Your ad will reach 5k person each day
                        </Text>
                    </View>

                    {/*Proceed Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(3), marginBottom: RFPercentage(10) }}>
                        <MyAppButton
                            title="Proceed"
                            padding={RFPercentage(1.4)}
                            // onPress={() => handleLogin()}
                            backgroundColor={Colors.primary}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1)}
                            width={"90%"}
                        />
                    </View>


                </View>
            </ScrollView>

            {/* Bottom tab */}
            <BottomTab props={props} />

        </Screen>
    );
}

export default AdvertisementScreen;