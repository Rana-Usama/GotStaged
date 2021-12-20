import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function EditProfileScreen(props) {

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

    const [buttonRed, setButtonRed] = useState('0');

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Name",
            title: 'Name',
            placeholderAtCenter: false,
            height: RFPercentage(7.4),
            value: "",
        },
        {
            placeholder: "Description",
            atStartPlaceholder: true,
            title: 'Description',
            height: RFPercentage(20),
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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

                {/* NavBar */}
                <View style={{ marginTop: RFPercentage(5), width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} style={{ position: 'absolute', left: 0 }}>
                        <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.4) }} source={require('../../assets/images/notification.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: RFPercentage(2.5), fontWeight: '700', color: Colors.black }}>
                        Edit Profile
                    </Text>
                </View>

                {/* Image */}
                <TouchableOpacity onPress={pickImage} activeOpacity={0.7} style={{ overflow: 'hidden', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(6), backgroundColor: Colors.twoButtons, width: RFPercentage(19), height: RFPercentage(19), borderRadius: RFPercentage(20) }}>
                    {image ?
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                        :
                        <ImageBackground style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/ep.png')} >
                            {/* empty view for background opacity */}
                            <View style={{ borderRadius: RFPercentage(3), position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
                            <Image style={{ width: RFPercentage(7), height: RFPercentage(5) }} source={require('../../assets/images/camera.png')} />
                        </ImageBackground>
                    }
                </TouchableOpacity>

                {/* Input fields */}
                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        <View style={{ marginTop: RFPercentage(6), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginLeft: RFPercentage(0.8) }} >
                                    <Text style={{ marginTop: !i == 0 ? RFPercentage(2) : RFPercentage(0), color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500', marginBottom: RFPercentage(1.2) }}>
                                        {item.title}
                                    </Text>
                                    <InputField
                                        placeholder={item.placeholder}
                                        backgroundColor={"#FAFAFA"}
                                        atStartPlaceholder={item.atStartPlaceholder}
                                        borderWidth={RFPercentage(0.1)}
                                        placeholderAtCenter={item.placeholderAtCenter}
                                        borderColor={"#FAFAFA"}
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

                        {/* Gender selection buttons */}
                        <View style={{ width: '88%', justifyContent: 'center', alignItems: 'flex-start', marginTop: RFPercentage(3) }}>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500', }}>
                                Gender
                            </Text>

                            <View style={{ alignSelf: 'center', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2) }}>
                                <TouchableOpacity onPress={() => setButtonRed('1')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%', height: RFPercentage(7), borderRadius: RFPercentage(1), backgroundColor: buttonRed == '1' ? Colors.primary : "#FAFAFA" }}>
                                    <Ionicons style={{ position: 'absolute', left: RFPercentage(2), fontSize: RFPercentage(2.8) }} name="ios-male-sharp" color={buttonRed == '1' ? Colors.white : Colors.black} />
                                    <Text style={{ color: buttonRed == '1' ? Colors.white : '#757575', fontSize: RFPercentage(2) }}>
                                        Male
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setButtonRed('2')} style={{ flexDirection: 'row', marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: '50%', borderRadius: RFPercentage(1), height: RFPercentage(7), backgroundColor: buttonRed == '2' ? Colors.primary : "#FAFAFA", borderColor: "#757575" }}>
                                    <Ionicons style={{ position: 'absolute', left: RFPercentage(2), fontSize: RFPercentage(2.8) }} name="ios-female-sharp" color={buttonRed == '2' ? Colors.white : Colors.black} />
                                    <Text style={{ color: buttonRed == '2' ? Colors.white : '#757575', fontSize: RFPercentage(2) }}>
                                        Female
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: '88%', justifyContent: 'center', alignItems: 'flex-start', marginTop: RFPercentage(3) }}>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500', }}>
                                Date of Birth
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(2), borderRadius: RFPercentage(1), alignSelf: 'center', backgroundColor: '#FAFAFA', width: '100%', height: RFPercentage(8) }}>
                                <TextInput style={{ width: '100%', marginLeft: RFPercentage(3) }} placeholder='DD/MM/YYYY' />
                                <Image style={{ position: 'absolute', right: RFPercentage(2), width: RFPercentage(3.3), height: RFPercentage(3) }} source={require('../../assets/images/cal.png')} />
                            </View>
                        </View>

                        {/* Button */}
                        <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7) }}>
                            <MyAppButton
                                title="Save"
                                padding={RFPercentage(1.8)}
                                // onPress={() => handleLogin()}
                                backgroundColor={Colors.primary}
                                color={Colors.white}
                                bold={false}
                                borderRadius={RFPercentage(1)}
                                width={"90%"}
                            />
                        </View>

                        <View style={{ marginBottom: RFPercentage(4) }} />
                    </View>
                </ScrollView>

            </Screen>
        </KeyboardAvoidingView>
    );
}

export default EditProfileScreen;