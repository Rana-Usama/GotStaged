import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from './../components/common/BottomTab';
import MyAppButton from './../components/common/MyAppButton';
import About from './About';
import Payments from './Payments';

//config
import Colors from '../config/Colors';

function MyChannelScreen(props) {

    const [buttonColor, setButtonColor] = useState('1');

    const [chgangeButtonColor, setChangeButtonColor] = useState('1');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

                {/* Nav bar */}
                <ImageBackground style={{ width: '100%', height: RFPercentage(20), justifyContent: 'flex-start', alignItems: 'center' }} source={require('../../assets/images/sb.png')}>

                    <View style={{ marginTop: RFPercentage(5), width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', left: RFPercentage(2), }}>
                            <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2) }} source={require('../../assets/images/notification.png')} />
                        </TouchableOpacity>
                        <Image style={{ width: RFPercentage(18), height: RFPercentage(4) }} source={require('../../assets/images/smallLogo.png')} />
                        <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(8), }}>
                            <Image style={{ width: RFPercentage(3.5), height: RFPercentage(2.3) }} source={require('../../assets/images/vedio.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(2), }}>
                            <Image style={{ width: RFPercentage(2.4), height: RFPercentage(2.4) }} source={require('../../assets/images/search.png')} />
                        </TouchableOpacity>
                    </View>

                    {/* Buttons to navigate to different pages */}

                    <TouchableOpacity onPress={() => setButtonColor('1')} style={{ position: 'absolute', left: RFPercentage(2), bottom: RFPercentage(3) }}>
                        <Text style={{ fontSize: RFPercentage(2), color: buttonColor == '1' ? Colors.primary : "#707070" }} >
                            My Channel
                        </Text>
                        {
                            buttonColor == '1' ?
                                <View style={{ top: RFPercentage(1), backgroundColor: Colors.primary, width: RFPercentage(12), height: RFPercentage(0.3) }} />
                                :
                                null
                        }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setButtonColor('2')} style={{ position: 'absolute', bottom: RFPercentage(3), left: RFPercentage(19) }}>
                        <Text style={{ fontSize: RFPercentage(2), color: buttonColor == '2' ? Colors.primary : "#707070" }} >
                            My Videos
                        </Text>
                        {
                            buttonColor == '2' ?
                                <View style={{ top: RFPercentage(1), backgroundColor: Colors.primary, width: RFPercentage(12), height: RFPercentage(0.3) }} />
                                :
                                null
                        }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setButtonColor('3')} style={{ position: 'absolute', bottom: RFPercentage(3), right: RFPercentage(12) }}>
                        <Text style={{ fontSize: RFPercentage(2), color: buttonColor == '3' ? Colors.primary : "#707070" }} >
                            Payments
                        </Text>
                        {
                            buttonColor == '3' ?
                                <View style={{ top: RFPercentage(1), backgroundColor: Colors.primary, width: RFPercentage(12), height: RFPercentage(0.3) }} />

                                :
                                null
                        }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setButtonColor('4')} style={{ position: 'absolute', right: buttonColor == '4' ? RFPercentage(-3) : RFPercentage(2), bottom: RFPercentage(3) }}>
                        <Text style={{ fontSize: RFPercentage(2), color: buttonColor == '4' ? Colors.primary : "#707070" }} >
                            About
                        </Text>
                        {
                            buttonColor == '4' ?
                                <View style={{ top: RFPercentage(1), backgroundColor: Colors.primary, width: RFPercentage(12), height: RFPercentage(0.3) }} />

                                :
                                null
                        }
                    </TouchableOpacity>
                </ImageBackground>

                {/* Page Details */}
                {buttonColor == '1' ?
                    <ScrollView style={{ flex: 1, width: '100%' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(25), backgroundColor: '#FAFAFA', marginTop: RFPercentage(-1) }}>

                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >

                                    <TouchableOpacity activeOpacity={0.7}>
                                        <Image style={{ width: RFPercentage(20), height: RFPercentage(20), marginLeft: RFPercentage(3) }} source={require('../../assets/images/rock.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', top: 0, right: RFPercentage(3) }} >
                                        <MaterialCommunityIcons name="dots-horizontal" style={{ fontSize: RFPercentage(3.4) }} color={Colors.black} />
                                    </TouchableOpacity>

                                    <View style={{ width: '100%', alignSelf: 'flex-start', marginLeft: RFPercentage(3) }} >
                                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.7) }}>
                                            Gibson Musics
                                        </Text>
                                        <View style={{ flexDirection: 'row', marginTop: RFPercentage(3) }} >
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500' }} >
                                                    186
                                                </Text>
                                                <Text style={{ color: "#707070", fontSize: RFPercentage(2) }} >
                                                    Uploads
                                                </Text>
                                            </View>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2) }} >
                                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500' }} >
                                                    3.1M
                                                </Text>
                                                <Text style={{ color: "#707070", fontSize: RFPercentage(2) }} >
                                                    Followers
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ alignSelf: "flex-start", width: RFPercentage(28), marginTop: RFPercentage(4) }}>
                                            <MyAppButton
                                                title="Edit Channel"
                                                padding={RFPercentage(0.9)}
                                                // onPress={() => handleLogin()}
                                                fontSize={RFPercentage(2)}
                                                backgroundColor={Colors.primary}
                                                color={Colors.white}
                                                bold={false}
                                                borderRadius={RFPercentage(1)}
                                                width={"100%"}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/*Body Image */}
                            <Image style={{ width: RFPercentage(33.2), height: RFPercentage(34), marginTop: RFPercentage(2) }} source={require('../../assets/images/body.png')} />

                            <View style={{ alignSelf: 'center', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2.5) }}>
                                <TouchableOpacity onPress={() => setChangeButtonColor('1')} activeOpacity={0.6} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%', height: RFPercentage(6), borderRadius: RFPercentage(1), backgroundColor: chgangeButtonColor == '1' ? Colors.primary : Colors.white, borderColor: Colors.primary, borderWidth: RFPercentage(0.1) }}>
                                    <Feather name="upload-cloud" style={{ position: 'absolute', left: RFPercentage(2), fontSize: RFPercentage(2.8) }} color={chgangeButtonColor == '1' ? Colors.white : Colors.primary} />
                                    <Text style={{ color: chgangeButtonColor == '1' ? Colors.white : Colors.primary, fontSize: RFPercentage(2), marginLeft: RFPercentage(2.5) }}>
                                        Post a New Video
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setChangeButtonColor('2')} activeOpacity={0.6} style={{ flexDirection: 'row', marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: '50%', borderRadius: RFPercentage(1), height: RFPercentage(6), backgroundColor: chgangeButtonColor == '2' ? Colors.primary : Colors.white, borderColor: Colors.primary, borderWidth: RFPercentage(0.1) }}>
                                    <FontAwesome5 name="guitar" style={{ position: 'absolute', left: RFPercentage(2), fontSize: RFPercentage(2.8) }} color={chgangeButtonColor == '2' ? Colors.white : Colors.primary} />
                                    <Text style={{ color: chgangeButtonColor == '2' ? Colors.white : Colors.primary, fontSize: RFPercentage(2) }}>
                                        Start a Concert
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                    :
                    null
                }

                {/* About */}
                {buttonColor == '4' ?
                    <ScrollView style={{ flex: 1, width: '100%' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <About />
                        </View>
                    </ScrollView>
                    :
                    null
                }

                {buttonColor == '3' ?
                    <ScrollView style={{ flex: 1, width: '100%' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Payments />
                        </View>
                    </ScrollView>
                    :
                    null
                }

                {/* Bottom tab */}
                < BottomTab props={props} />
            </Screen>
        </KeyboardAvoidingView>
    );
}

export default MyChannelScreen;