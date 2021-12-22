import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//components
import MyAppButton from './../components/common/MyAppButton';
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ProfileScreen(props) {

    const subsCartData = [
        {
            imageSource: require('../../assets/images/black.png'),
        },
        {
            imageSource: require('../../assets/images/blue.png'),
        },

    ]

    const subsCart2Data = [
        {
            imageSource: require('../../assets/images/singer.png'),
        },
        {
            imageSource: require('../../assets/images/hcart2.png'),
        },
        {
            imageSource: require('../../assets/images/hcart3.png'),
        },

    ]

    const subsCart3Data = [
        {
            imageSource: require('../../assets/images/h1.png'),
            name: 'MelodySheep',
        },
        {
            imageSource: require('../../assets/images/h2.png'),
            name: 'Sami Yusuf',
        },
        {
            imageSource: require('../../assets/images/h3.png'),
            name: 'Amber Joe',
        },
        {
            imageSource: require('../../assets/images/h4.png'),
            name: 'Soothing Rel',
        },
        {
            imageSource: require('../../assets/images/h5.png'),
            name: 'Zen Watt',
        },
    ]

    const handleNavigation = () => {
        props.navigation.navigate('EditProfileScreen')
    };


    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <ImageBackground style={styles.navContauner} source={require('../../assets/images/navbar.png')}>
                <View style={styles.navSubContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')} activeOpacity={0.7}>
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(2.8) }} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('EditProfileScreen')} activeOpacity={0.7} style={{ position: 'absolute', right: 0 }}>
                        <Feather name="settings" style={{ fontSize: RFPercentage(2.8) }} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9}>
                    <Image style={{ marginTop: RFPercentage(3.5), width: RFPercentage(20), height: RFPercentage(20) }} source={require('../../assets/images/profile.png')} />
                </TouchableOpacity>
            </ImageBackground>

            <Text style={styles.profileNameText}>
                Mamie Long
            </Text>
            <Text style={styles.userEmailText}>
                abc@gmail.com
            </Text>

            <View style={styles.introTextContainer}>
                <Text style={{ fontSize: RFPercentage(2.1), color: '#707070' }}>
                    Hi, My name is Mamie and I love photography
                </Text>
                <Text style={{ fontSize: RFPercentage(2.1), marginTop: RFPercentage(0.3), color: '#707070' }}>
                    it's my greatest passion in life.
                </Text>
            </View>

            {/*Edit profile Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(2) }}>
                <MyAppButton
                    title="Edit Profile"
                    padding={RFPercentage(1.4)}
                    onPress={() => handleNavigation()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"90%"}
                />
            </View>

            <ScrollView style={{ flex: 1, width: '100%', marginTop: RFPercentage(1) }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={styles.playListViewTextContainer}>
                        <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, fontWeight: '700' }}>
                            Playlists
                        </Text>
                        <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }}>
                            <Text style={{ fontSize: RFPercentage(2), color: '#707070' }}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*First Playlists Horizental Cart */}
                <View style={{ marginLeft: RFPercentage(1), marginTop: RFPercentage(2), flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <ScrollView horizontal={true} style={{ width: '100%', backgroundColor: Colors.white }}>

                        {subsCartData.map((item, i) => (
                            <TouchableOpacity key={i} activeOpacity={0.8} style={{ borderRadius: RFPercentage(2), marginBottom: RFPercentage(3), marginLeft: !i == 0 ? RFPercentage(2.5) : 0, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>

                                <ImageBackground style={{ borderRadius: RFPercentage(10), width: RFPercentage(40), height: RFPercentage(25) }} source={item.imageSource} >
                                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', bottom: RFPercentage(2), right: RFPercentage(2) }}>
                                        <Image style={{ width: RFPercentage(8.2), height: RFPercentage(8) }} source={require('../../assets/images/play.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', bottom: RFPercentage(2), left: RFPercentage(2) }}>
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2), fontWeight: '700' }}>
                                            Playlist (ABC)
                                        </Text>
                                        <Text style={{ color: "#707070", fontSize: RFPercentage(1.8) }}>
                                            19 Vedios
                                        </Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>


                {/* 2nd horizental cart */}

                <View style={styles.historyViewAllContainer}>
                    <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, fontWeight: '700' }}>
                        History
                    </Text>
                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }}>
                        <Text style={{ fontSize: RFPercentage(2), color: '#707070' }}>
                            View All
                        </Text>
                    </TouchableOpacity>
                </View>


                {/*First Playlists Horizental Cart */}
                <View style={styles.firstHorizentalCartContainer}>
                    <ScrollView horizontal={true} style={{ width: '100%', backgroundColor: Colors.white }}>

                        {subsCart2Data.map((item, i) => (
                            <TouchableOpacity key={i} activeOpacity={0.8} style={{ borderRadius: RFPercentage(1.2), marginBottom: RFPercentage(3), marginLeft: !i == 0 ? RFPercentage(2.5) : 0, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                <ImageBackground style={{ borderRadius: RFPercentage(10), width: RFPercentage(25), height: RFPercentage(20) }} source={item.imageSource} >
                                    <View style={{ flexDirection: 'row', position: 'absolute', top: RFPercentage(1.5), left: RFPercentage(1), borderRadius: RFPercentage(3), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(4.2) }}>
                                        {/* empty view for background opacity */}
                                        <View style={{ borderRadius: RFPercentage(3), position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.1)" }} />
                                        <Image style={{ width: RFPercentage(2.3), height: RFPercentage(1.8) }} source={require('../../assets/images/whiteeye.png')} />
                                        <Text style={{ fontSize: RFPercentage(1.6), color: Colors.white, marginLeft: RFPercentage(0.8), fontWeight: '800' }}>
                                            15.3
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>


                {/* 3rd cart */}
                <View style={styles.subViewAllText}>
                    <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, fontWeight: '700' }}>
                        My Subscriptions
                    </Text>
                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }}>
                        <Text style={{ fontSize: RFPercentage(2), color: '#707070' }}>
                            View All
                        </Text>
                    </TouchableOpacity>
                </View>

                {/*Horizental Profiles Cart */}
                <View style={styles.subscriptionsContainer}>
                    <ScrollView horizontal={true} style={{ width: '100%', backgroundColor: Colors.white }}>

                        {subsCart3Data.map((item, i) => (
                            <TouchableOpacity key={i} activeOpacity={0.8} style={{ marginBottom: RFPercentage(3), marginLeft: !i == 0 ? RFPercentage(2.5) : 0, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: RFPercentage(10), height: RFPercentage(10) }} source={item.imageSource} />
                                <Text style={{ marginTop: RFPercentage(1.6), fontSize: RFPercentage(1.6), color: "#707070" }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <View style={{ marginBottom: RFPercentage(5) }} />
            </ScrollView>

            {/* Bottom tab */}
            < BottomTab props={props} />

        </Screen>
    );
}

const styles = StyleSheet.create({
    navContauner: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: RFPercentage(32)
    },
    navSubContainer: {
        alignSelf: 'center',
        marginTop: RFPercentage(6),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profileNameText: {
        fontSize: RFPercentage(2.2),
        marginTop: RFPercentage(2.5),
        color: Colors.black,
        fontWeight: '700'
    },
    userEmailText: {
        fontSize: RFPercentage(2),
        marginTop: RFPercentage(0.5),
        color: '#707070'
    },
    introTextContainer: {
        marginTop: RFPercentage(3),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playListViewTextContainer: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    firstHorizentalCartContainer: {
        marginLeft: RFPercentage(1),
        marginTop: RFPercentage(2),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    historyViewAllContainer: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    subViewAllText: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    subscriptionsContainer: {
        marginLeft: RFPercentage(1),
        marginTop: RFPercentage(2),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default ProfileScreen;