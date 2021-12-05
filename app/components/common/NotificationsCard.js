import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../Screen';
//screens
import Colors from '../../config/Colors';

function NotificationsCard({ imageSource, Title, subTitle, time, onPressButtons = false }) {

    // const [buttons, setButtons] = useState(false);

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ justifyContent: 'center', width: '90%', height: onPressButtons ? RFPercentage(18) : RFPercentage(14), backgroundColor: Colors.twoButtons, borderRadius: RFPercentage(2), alignSelf: 'center' }}>

                <TouchableOpacity style={{ marginLeft: RFPercentage(3), flexDirection: 'row', width: '90%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {/* DP Image */}
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={{ width: RFPercentage(8), height: RFPercentage(8) }} source={imageSource} />
                    </TouchableOpacity>
                    {/* Details */}
                    <View style={{ marginLeft: RFPercentage(1.2) }}>
                        <Text style={{ color: Colors.black, fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                            {Title}
                        </Text>
                        <View style={{ marginTop: RFPercentage(0.8), flexDirection: 'row' }}>
                            <Text style={{ color: '#707070', fontSize: RFPercentage(1.6) }}>
                                {subTitle}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ color: "#707070", position: 'absolute', right: 0, fontSize: RFPercentage(1.7) }}>
                        {time}
                    </Text>
                </TouchableOpacity>

                {onPressButtons ?
                    <View style={{ alignSelf: 'center', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2) }}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), height: RFPercentage(6), borderRadius: RFPercentage(1), backgroundColor: Colors.twoButtons, borderColor: "#757575", borderWidth: RFPercentage(0.1) }}>
                            <Text style={{ color: '#757575', fontSize: RFPercentage(1.8) }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), borderRadius: RFPercentage(1), height: RFPercentage(6), backgroundColor: Colors.primary, borderColor: "#757575" }}>
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.8) }}>
                                Post
                            </Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }

            </View>

        </Screen>
    );
}

export default NotificationsCard;