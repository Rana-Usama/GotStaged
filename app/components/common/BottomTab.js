import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    const [active, setActive] = useState('0');

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(7), backgroundColor: Colors.white }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity onPress={() => [setActive('1'), props.navigation.navigate('HomeScreen')]}>
                    {/* <Feather name="home" size={RFPercentage(4)} color={active == '1' ? Colors.primary : '#929292'} /> */}
                    {active == '1' ?
                        <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../../assets/images/home.png')} />
                        :
                        <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../../assets/images/homeu.png')} />
                    }
                </TouchableOpacity>

                <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(13) }} onPress={() => [setActive('2'), props.navigation.navigate('MyChannelScreen')]}>
                    {/* <Feather name="home" size={RFPercentage(4)} color={active == '1' ? Colors.primary : '#929292'} /> */}
                    {active == '2' ?
                        <Image style={{ width: RFPercentage(3), height: RFPercentage(3.3) }} source={require('../../../assets/images/link.png')} />
                        :
                        <Image style={{ width: RFPercentage(3), height: RFPercentage(3.4) }} source={require('../../../assets/images/linku.png')} />
                    }
                </TouchableOpacity>

                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(14) }} onPress={() => [setActive('3'), props.navigation.navigate('NotificationsScreen')]}>
                    {/* <Feather name="home" size={RFPercentage(4)} color={active == '1' ? Colors.primary : '#929292'} /> */}
                    {active == '3' ?
                        <Image style={{ width: RFPercentage(2.7), height: RFPercentage(3.1) }} source={require('../../../assets/images/bellu.png')} />
                        :
                        <Image style={{ width: RFPercentage(2.7), height: RFPercentage(3.1) }} source={require('../../../assets/images/bell.png')} />
                    }
                </TouchableOpacity>

                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(1) }} onPress={() => [setActive('4'), props.navigation.navigate('ProfileScreen')]}>
                    {/* <Feather name="home" size={RFPercentage(4)} color={active == '1' ? Colors.primary : '#929292'} /> */}
                    {active == '4' ?
                        <Image style={{ width: RFPercentage(2.7), height: RFPercentage(3) }} source={require('../../../assets/images/acc.png')} />
                        :
                        <Image style={{ width: RFPercentage(2.7), height: RFPercentage(3) }} source={require('../../../assets/images/accu.png')} />
                    }
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default BottomTab;