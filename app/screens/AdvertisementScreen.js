import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Dimensions, Modal, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider'

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import InputField from './../components/common/InputField';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

const { height } = Dimensions.get("window");

function AdvertisementScreen(props) {

    const [pickerModel, setPickerModel] = useState(false);

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

    const [inputField, SetInputField] = useState([
        {
            placeholder: "NAME ON CARD",
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
            placeholder: "CARD NR",
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
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleNavigation = () => {
        props.navigation.navigate('ManageAddScreen')
    }



    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "flex-start", backgroundColor: Colors.white }}>

            {/* nav */}
            <View style={{ width: '90%', alignSelf: 'center', marginTop: RFPercentage(2) }} >
                <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.openDrawer()}>
                    <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2) }} source={require('../../assets/images/notification.png')} />
                </TouchableOpacity>

                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.7), fontWeight: Platform.OS == 'android' ? 'bold' : '700', marginTop: RFPercentage(3.5) }} >
                    Advertisement
                </Text>
            </View>


            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={styles.addDisplayTextConatiner} >
                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                            Ad Display
                        </Text>
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(3) }}>
                        <MyAppButton
                            title="Manage Ad Display"
                            padding={RFPercentage(1.4)}
                            onPress={() => handleNavigation()}
                            backgroundColor={Colors.primary}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1)}
                            width={"90%"}
                        />
                    </View>

                    {/* Pickers */}

                    {pickerData.map((item, i) => (
                        <View key={i} style={styles.pickerContainer}>
                            <View style={{ alignSelf: 'flex-start', flexDirection: 'row', marginTop: i == 2 ? RFPercentage(6) : 0 }}>
                                <Text style={{ fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                                    {item.title}
                                </Text>
                            </View>
                            <ReactNativeCrossPicker
                                modalTextStyle={{ color: Colors.black }}
                                mainComponentStyle={styles.mainComponentStyle}
                                modalComponentStyle={styles.modalComponentStyle}
                                iconComponent={iconComponent}
                                placeholderStyle={{ color: "black", fontSize: RFPercentage(2) }}
                                modalTextStyle={styles.modalTextStyle}
                                items={i == 0 ? items : items2}
                                setItem={i == 0 ? setItem : setItem2} selectedItem={i == 0 ? selectedItem : selectedItem2}
                                placeholder={item.placeholder}
                                modalMarginTop={"70%"}
                            />
                        </View>
                    ))}

                    {/* Meter */}
                    <View style={styles.meterConatiner} >
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
                    <View style={styles.priceSelectorConatiner} >
                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                            Select Price
                        </Text>
                    </View>
                    <View style={styles.rangeLineConatiner} >
                        <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: Colors.black }} >
                            ${sliderValue.toFixed()}
                        </Text>
                        <TouchableOpacity activeOpacity={0.6} >
                            <MaterialIcons name="edit" style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2.8) }} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }} > */}
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage((2.4)) }} >
                        <Slider
                            style={{ width: '100%', height: 40 }}
                            minimumValue={0}
                            thumbTintColor={Colors.primary}
                            maximumValue={500}
                            minimumTrackTintColor="#707070"
                            maximumTrackTintColor="#707070"
                            value={sliderValue}
                            onValueChange={
                                (sliderValue) => setSliderValue(sliderValue)
                            }
                        />
                    </View>
                    {/* </View> */}

                    {/* Last Picker */}
                    <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ alignSelf: 'flex-start', flexDirection: 'row', marginTop: RFPercentage(4) }}>
                            <Text style={{ fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                                Ad Runtime
                            </Text>
                        </View>
                        <ReactNativeCrossPicker
                            modalTextStyle={{ color: Colors.black }}
                            mainComponentStyle={styles.mainComponentStyle}
                            modalComponentStyle={styles.modalComponentStyle}
                            iconComponent={iconComponent}
                            placeholderStyle={{ color: "black", fontSize: RFPercentage(2) }}
                            modalTextStyle={styles.modalTextStyle}
                            items={items3}
                            setItem={setItem3} selectedItem={selectedItem3}
                            placeholder='3 Days'
                            modalMarginTop={"70%"}
                        />
                    </View>

                    <View style={styles.yourAddContainer} >
                        <EvilIcons name="exclamation" style={{ fontSize: RFPercentage(2.6) }} color="#5E5E5E" />
                        <Text style={{ color: '#5E5E5E', fontSize: RFPercentage(1.9), marginLeft: RFPercentage(1) }} >
                            Your ad will reach 5k person each day
                        </Text>
                    </View>

                    {/*Proceed Button */}
                    <View style={styles.proceedeButtonContainer}>
                        <MyAppButton
                            title="Proceed"
                            padding={RFPercentage(1.4)}
                            onPress={() => setPickerModel(true)}
                            backgroundColor={Colors.primary}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1)}
                            width={"90%"}
                        />
                    </View>

                    {/* Model */}
                    <Modal visible={pickerModel} transparent={true}>
                        <View style={{ justifyContent: "center", flex: 1, height: height, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }} >
                            <View style={styles.modalSubContainer} >
                                <Image style={{ width: '97%', height: RFPercentage(31), marginTop: RFPercentage(2) }} source={require('../../assets/images/card.png')} />
                                {/* Input Fields */}
                                {inputField.map((item, i) => (
                                    <View key={i} style={{ alignSelf: 'center', marginTop: i == 0 ? RFPercentage(4) : RFPercentage(3) }} >
                                        {/* Input Fields */}
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
                                {/* exp and cw */}
                                <View style={styles.expAndCwTextContainer}>
                                    {/* saperator */}
                                    <View style={{ backgroundColor: Colors.newInputFieldBorder, width: RFPercentage(0.2), height: RFPercentage(6) }} />
                                    <View style={{ position: 'absolute', left: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                                            6 / 16
                                        </Text>
                                        <Text style={{ color: '#989191', fontSize: RFPercentage(1.8), marginTop: RFPercentage(1) }}>
                                            EXP DATE
                                        </Text>
                                    </View>
                                    <View style={{ position: 'absolute', right: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                                            231
                                        </Text>
                                        <Text style={{ color: '#989191', fontSize: RFPercentage(1.8), marginTop: RFPercentage(1) }}>
                                            CW
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ alignSelf: 'center', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(5) }}>
                                    <TouchableOpacity onPress={() => setPickerModel(false)} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), height: RFPercentage(6), borderRadius: RFPercentage(1), backgroundColor: Colors.twoButtons }}>
                                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setPickerModel(false)} style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), borderRadius: RFPercentage(1), height: RFPercentage(6), backgroundColor: Colors.primary, borderColor: "#757575" }}>
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2) }}>
                                            Pay Now
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>

            {/* Bottom tab */}
            <BottomTab props={props} />

        </Screen>
    );
}

const styles = StyleSheet.create({
    addDisplayTextConatiner: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: RFPercentage(3)
    },
    pickerContainer: {
        marginTop: RFPercentage(3),
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    mainComponentStyle: {
        width: "100%",
        borderWidth: 0,
        backgroundColor: "#FAFAFA",
        height: RFPercentage(6.5),
        marginTop: RFPercentage(3)
    },
    modalComponentStyle: {
        borderRadius: RFPercentage(2.3),
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: RFPercentage(0.3)
    },
    modalTextStyle: {
        color: Colors.black,
        fontSize: RFPercentage(2.4),
        fontWeight: 'bold',
        bottom: RFPercentage(1.8)
    },
    meterConatiner: {
        marginTop: RFPercentage(7),
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    priceSelectorConatiner: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: RFPercentage(6)
    },
    rangeLineConatiner: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: RFPercentage(1)
    },
    yourAddContainer: {
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: RFPercentage(2.8)
    },
    proceedeButtonContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: RFPercentage(3),
        marginBottom: RFPercentage(10)
    },
    modalSubContainer: {
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'flex-start',
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.white,
        width: "90%", height: RFPercentage(75)
    },
    expAndCwTextContainer: {
        width: '96%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFPercentage(3)
    }
})

export default AdvertisementScreen;