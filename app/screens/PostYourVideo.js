import React, { useState, useEffect } from 'react';
import { View, Text, Image, Platform, Modal, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

//components
import Screen from './../components/Screen';
import BottomTab from './../components/common/BottomTab';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
//config
import Colors from '../config/Colors';

const { height } = Dimensions.get("window");

function PostYourVideo(props) {

    const [pickerModel, setPickerModel] = useState(false);

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

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
                    Post Your Video
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

                {/* Thumbnail */}
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', marginTop: RFPercentage(2.5) }} >
                    <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                        Thumbnail
                    </Text>
                </View>
                <TouchableOpacity onPress={pickImage} activeOpacity={0.6} style={{ alignSelf: 'center', marginTop: RFPercentage(-1) }} >

                    {image ?
                        <Image source={{ uri: image }} style={{ marginTop: RFPercentage(3), width: RFPercentage(45), height: RFPercentage(25), borderRadius: RFPercentage(2) }} />
                        :
                        <Image style={{ marginTop: RFPercentage(4), width: RFPercentage(45), height: RFPercentage(8) }} source={require('../../assets/images/thumbnail.png')} />
                    }

                </TouchableOpacity>

                {/* Uploads */}
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', marginTop: RFPercentage(3.5) }} >
                    <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '600' : 'bold', color: Colors.black }} >
                        Upload Video
                    </Text>
                </View>
                <TouchableOpacity onPress={() => setPickerModel(true)} activeOpacity={0.6} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: RFPercentage(46), height: RFPercentage(8), borderRadius: RFPercentage(1), backgroundColor: '#FAFAFA', marginTop: RFPercentage(4) }}>
                    <Feather name="upload-cloud" style={{ fontSize: RFPercentage(3.5) }} color="#909090" />
                </TouchableOpacity>

                {/* Submit Button */}
                <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6), marginBottom: RFPercentage(12) }}>
                    <MyAppButton
                        title="Submit"
                        padding={RFPercentage(1.6)}
                        // onPress={() => handleLogin()}
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
                        <View style={{ alignSelf: 'center', alignItems: "flex-start", justifyContent: 'flex-start', borderRadius: RFPercentage(2), backgroundColor: Colors.white, width: "90%", height: RFPercentage(70) }} >
                            <TouchableOpacity onPress={() => setPickerModel(false)} style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(2) }} >
                                <Entypo name="cross" style={{ fontSize: RFPercentage(4) }} color={Colors.black} />
                            </TouchableOpacity>
                            <View style={{ width: '90%', alignItems: 'flex-start', justifyContent: 'center', alignSelf: 'center', marginTop: RFPercentage(3) }}>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: Platform.OS == 'ios' ? '600' : 'bold' }} >
                                    Under Review
                                </Text>
                                <Text style={{ marginTop: RFPercentage(1), color: '#7C7C7C', fontSize: RFPercentage(2) }} >
                                    Your video will be reviewed by our AI and it will be
                                </Text>
                                <Text style={{ color: '#7C7C7C', fontSize: RFPercentage(2) }} >
                                    approved if it follows our community guidelines.
                                </Text>
                            </View>
                            <Image style={{ marginTop: RFPercentage(6), alignSelf: 'center', width: RFPercentage(30), height: RFPercentage(36) }} source={require('../../assets/images/bot.png')} />
                            <View style={{ width: "100%", alignItems: "center", position: 'absolute', bottom: RFPercentage(2) }}>
                                <MyAppButton
                                    title="Continue"
                                    onPress={() => setPickerModel(false)}
                                    padding={RFPercentage(1.6)}
                                    fontSize={RFPercentage(2.1)}
                                    // onPress={() => handleLogin()}
                                    backgroundColor={Colors.primary}
                                    color={Colors.white}
                                    bold={false}
                                    borderRadius={RFPercentage(1)}
                                    width={"90%"}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
            {/* Bottom tab */}
            < BottomTab props={props} />
        </Screen>
    );
}

export default PostYourVideo;