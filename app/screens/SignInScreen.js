import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { RadioButton } from 'react-native-paper';
import { Zocial } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingMdal';

//config
import Colors from '../config/Colors';

function SignInScreen(props) {

    const [indicator, showIndicator] = useState(false);
    const [tick, setTick] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Email Address",
            leftImage: "email",
            value: "",
        },
        {
            placeholder: "Password",
            // leftImage: require('../../assets/images/lock.png'),
            secure: true,
            value: ""
        },

    ]);


    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API integration
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <LoadingModal show={indicator} />

            {/* Top Logo */}
            <Image style={{ marginTop: RFPercentage(6) }} source={require('../../assets/images/logoText.png')} />

            {/* Login Text */}
            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'flex-start', width: '82%', marginTop: RFPercentage(7) }}>
                <Text style={{ color: Colors.black, fontSize: RFPercentage(3.5), fontWeight: 'bold' }}>
                    Login
                </Text>
            </View>

            {/* Social Links */}
            <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(4) }}>
                {/* Google Link */}
                <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(23), height: RFPercentage(6.5), borderRadius: RFPercentage(1), borderColor: Colors.blue, borderWidth: RFPercentage(0.1) }}>
                    <Image style={{ width: RFPercentage(18), height: RFPercentage(3) }} source={require('../../assets/images/google.png')} />
                </TouchableOpacity>

                {/* Apple Link */}
                <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: RFPercentage(1.5), justifyContent: 'center', alignItems: 'center', width: RFPercentage(23), height: RFPercentage(6.5), borderRadius: RFPercentage(1), borderColor: Colors.black, borderWidth: RFPercentage(0.1) }}>
                    <Image style={{ width: RFPercentage(12), height: RFPercentage(3.1) }} source={require('../../assets/images/apple.png')} />
                </TouchableOpacity>
            </View>

            {/* Saperation Line */}
            <View style={{ marginTop: RFPercentage(4), width: '60%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: Colors.darkGrey, width: RFPercentage(22), height: RFPercentage(0.1) }} />
                <Text style={{ marginLeft: RFPercentage(1), marginRight: RFPercentage(1), color: Colors.darkGrey, fontSize: RFPercentage(2.5) }}>
                    or
                </Text>
                <View style={{ backgroundColor: Colors.darkGrey, width: RFPercentage(22), height: RFPercentage(0.1) }} />
            </View>

            {/* Input fields */}
            <View style={{ marginTop: RFPercentage(2.6), justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: i === 0 ? RFPercentage(-2) : RFPercentage(2) }} >
                        <InputField
                            placeholder={item.placeholder}
                            backgroundColor={Colors.white}
                            // leftImageSource={item.leftImage}
                            logoName={item.leftImage}
                            borderWidth={RFPercentage(0.1)}
                            borderColor={Colors.inputFieldBorder}
                            height={RFPercentage(8.8)}
                            secure={item.secure}
                            borderRadius={RFPercentage(1)}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"80%"}
                        />
                    </View>
                ))}
            </View>

            {/* Forget Remember */}
            <View style={{ marginTop: RFPercentage(1.5), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

                {/* Check Box */}
                <TouchableOpacity onPress={() => setTick(true)} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(2.5), height: RFPercentage(2.5), borderRadius: RFPercentage(0.5), borderColor: Colors.primary, borderWidth: RFPercentage(0.09), backgroundColor: Colors.white }}>
                    {tick ?
                        <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setTick(false)}>
                            <Image source={require('../../assets/images/tick.png')} />
                        </TouchableOpacity>
                        : null}
                </TouchableOpacity>

                <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(1.8), color: Colors.inputFieldBorder }}>
                    Remember Me
                </Text>

                <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0, }}>
                    <Text style={{ fontWeight: '500', fontSize: RFPercentage(1.8), color: Colors.primary }}>
                        Forget Password?
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
                <MyAppButton
                    title="Sign In"
                    padding={RFPercentage(1.8)}
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"90%"}
                />
            </View>

            {/* Don't have account? */}
            <View style={{ position: "absolute", bottom: RFPercentage(4), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: Colors.inputFieldBorder, fontSize: RFPercentage(2) }}>
                    Don't have an account?
                </Text>

                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontWeight: '600', marginLeft: RFPercentage(2) }}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Line */}
            <Image style={{ position: 'absolute', bottom: RFPercentage(1.5) }} source={require('../../assets/images/line.png')} />


        </Screen>
    );
}

export default SignInScreen;