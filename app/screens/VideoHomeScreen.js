import React, { useState } from 'react';
import { ImageBackground, View, Image, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import Comments from '../components/common/Comments';

//config
import Colors from '../config/Colors';

function VideoHomeScreen(props) {

    const upNextData = [
        {
            imageSource: require('../../assets/images/hcart3.png'),
            time: '4:54',
            dp: require('../../assets/images/dp3.png'),
            title: 'Wandering thoughts | Relaxing thoughts',
            subTitle: 'Soothing Relaxation'
        },
        {
            imageSource: require('../../assets/images/hcart2.png'),
            time: '4:54',
            dp: require('../../assets/images/f2.png'),
            title: 'Pop Up Hits of the year',
            subTitle: 'Soothing Relaxation'
        },
        {
            imageSource: require('../../assets/images/hcart1.png'),
            time: '4:54',
            dp: require('../../assets/images/f3.png'),
            title: 'Wandering thoughts | Relaxing thoughts',
            subTitle: 'Soothing Relaxation'
        },
        {
            imageSource: require('../../assets/images/hcart2.png'),
            time: '4:54',
            dp: require('../../assets/images/f4.png'),
            title: 'Wandering thoughts | Relaxing thoughts',
            subTitle: 'Soothing Relaxation'
        },
    ]

    const commentsData = [
        {
            imageSource: require('../../assets/images/f3.png'),
            userName: 'Eastwood',
            comment: 'Nailed it!'
        },
        {
            imageSource: require('../../assets/images/f8.png'),
            userName: 'Naomi Barton',
            comment: 'Subscribed'
        },
        {
            imageSource: require('../../assets/images/profile1.png'),
            userName: 'Dwight Clark',
            comment: 'Astonishing'
        },
    ]

    const [color, setColor] = useState('0');

    const [active, setActive] = useState('2');

    const [video, setVideo] = useState(true);


    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

                {/* Video View */}
                <ImageBackground style={styles.videoViewContainer} source={require('../../assets/images/videoImage.png')} >
                    <View style={styles.videoViewSubContainer} >
                        {/* Previous */}
                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', left: 0 }} >
                            <SimpleLineIcons name="control-start" style={{ fontSize: RFPercentage(6), fontWeight: 'bold' }} color={Colors.white} />
                        </TouchableOpacity>
                        {/* Play & Pause */}
                        <TouchableOpacity onPress={() => setVideo(true)} activeOpacity={0.6}>
                            {video ?
                                <SimpleLineIcons onPress={() => setVideo(false)} name="control-play" style={{ fontSize: RFPercentage(6), fontWeight: 'bold' }} color={Colors.white} />
                                :
                                <SimpleLineIcons name="control-pause" style={{ fontSize: RFPercentage(6), fontWeight: 'bold' }} color={Colors.white} />
                            }
                        </TouchableOpacity>
                        {/* Next */}
                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                            <SimpleLineIcons name="control-end" style={{ fontSize: RFPercentage(6), fontWeight: 'bold' }} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                {/* DP with subscibers detail */}
                <View style={styles.smallDpContainerView}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/ndp.png')} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: RFPercentage(1) }}>
                        <Text style={{ fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                            Beatboxing for 12 Hours Straight | Marquez
                        </Text>
                        <View style={{ marginTop: RFPercentage(0.6), flexDirection: 'row' }}>
                            <Text style={{ color: '#707070', fontSize: RFPercentage(1.7) }}>
                                356,985,624 views
                            </Text>
                        </View>
                    </View>
                </View>

                {/* like dislike buttons */}
                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        <View style={styles.likeDislikeButtonsContainer}>
                            <TouchableOpacity onPress={() => setColor('1')} activeOpacity={0.7} style={{ width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '1' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                                <MaterialCommunityIcons name='cards-heart' style={{ fontSize: RFPercentage(4) }} color={color == '1' ? Colors.primary : Colors.black} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setColor('2')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '2' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                                <MaterialCommunityIcons name='heart-off' style={{ fontSize: RFPercentage(4) }} color={color == '2' ? Colors.primary : Colors.black} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setColor('3')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '3' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                                <MaterialCommunityIcons name='share' style={{ fontSize: RFPercentage(4) }} color={color == '3' ? Colors.primary : Colors.black} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setColor('4')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '4' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                                <MaterialCommunityIcons name='playlist-plus' style={{ fontSize: RFPercentage(4) }} color={color == '4' ? Colors.primary : Colors.black} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setColor('5')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), width: RFPercentage(7), height: RFPercentage(7), backgroundColor: color == '5' ? '#FCE6E7' : '#F4F4F4', borderRadius: RFPercentage(30), justifyContent: 'center', alignItems: 'center' }} >
                                <Ionicons name="warning" style={{ fontSize: RFPercentage(4) }} color={color == '5' ? Colors.primary : Colors.black} />
                            </TouchableOpacity>
                        </View>

                        {/* Subscribe button */}
                        <View style={styles.subscribeButton}>
                            <MyAppButton
                                title="Subscribe"
                                padding={RFPercentage(1.5)}
                                // onPress={() => handleLogin()}
                                backgroundColor={Colors.primary}
                                color={Colors.white}
                                bold={false}
                                borderRadius={RFPercentage(1)}
                                width={"95%"}
                            />
                        </View>

                    </View>
                </ScrollView>

                {/* Bottom Comments Component container */}
                <View style={styles.bottomContainer} >
                    <Image style={{ marginTop: RFPercentage(1), width: RFPercentage(14), height: RFPercentage(0.5) }} source={require('../../assets/images/l1.png')} />

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={() => setActive('1')} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', width: "50%", height: RFPercentage(6), backgroundColor: active == '1' ? Colors.primary : "#FAFAFA", borderRadius: RFPercentage(10) }}>
                            <Text style={{ color: active == '1' ? Colors.white : Colors.black, fontSize: RFPercentage(1.8), fontWeight: '500' }}>
                                UP NEXT
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActive('2')} activeOpacity={0.5} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2), width: "50%", height: RFPercentage(6), backgroundColor: active == '2' ? Colors.primary : "#FAFAFA", borderRadius: RFPercentage(10) }}>
                            <Text style={{ color: active == '2' ? Colors.white : Colors.black, fontSize: RFPercentage(1.8), fontWeight: '500' }}>
                                COMMENTS
                            </Text>
                        </TouchableOpacity>
                    </View>


                    {/* Comments */}
                    {active == '2' ?
                        <ScrollView style={{ flex: 1, width: '100%' }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                                <View style={{ alignSelf: 'center', width: '100%', marginBottom: RFPercentage(10) }} >
                                    {commentsData.map((item, i) => (
                                        <Comments key={i} imageSource={item.imageSource} userName={item.userName} comment={item.comment} />
                                    ))}
                                </View>
                            </View>
                        </ScrollView>
                        :
                        <ScrollView style={{ flex: 1, width: '100%' }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                {upNextData.map((item, i) => (
                                    <View key={i} style={{ marginTop: RFPercentage(2), width: '90%', justifyContent: 'flex-start', alignItems: "center" }} >

                                        <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', top: 0, right: 0 }} >
                                            <MaterialCommunityIcons name="dots-vertical" style={{ fontSize: RFPercentage(3) }} color={Colors.black} />
                                        </TouchableOpacity>

                                        <TouchableOpacity activeOpacity={0.8} style={{ alignSelf: 'flex-start' }} >
                                            <ImageBackground style={{ width: RFPercentage(17), height: RFPercentage(13.4) }} source={item.imageSource} >
                                                <View style={styles.timeOfVideoContainer}>
                                                    {/* for empty layer */}
                                                    <View style={styles.emptyLayer} />
                                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(1.5), fontWeight: '600' }}>
                                                        {item.time}
                                                    </Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>

                                        <View style={styles.upNextVideoPageDetailContainer}>
                                            {/* DP Image */}
                                            <TouchableOpacity activeOpacity={0.5}>
                                                <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={item.dp} />
                                            </TouchableOpacity>
                                            {/* Details */}
                                            <View style={{ marginLeft: RFPercentage(1.2) }}>
                                                <Text style={{ opacity: 0.5, fontWeight: '600', fontSize: RFPercentage(1.6) }}>
                                                    {item.title}
                                                </Text>
                                                <View style={{ marginTop: RFPercentage(0.3), flexDirection: 'row' }}>
                                                    <Text style={{ opacity: 0.6, color: '#707070', fontSize: RFPercentage(1.5) }}>
                                                        {item.subTitle}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                                <View style={{ marginBottom: RFPercentage(5) }} />
                            </View>
                        </ScrollView>
                    }


                    {/* Comment input */}
                    <View style={styles.commentInputContainer} >
                        <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/ep.png')} />
                        <View style={styles.inputFieldContainer} >
                            <SimpleLineIcons name="emotsmile" style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(3) }} color={'#242424'} />
                            <TextInput style={{ marginLeft: RFPercentage(2), width: '100%' }} placeholderTextColor={'#242424'} placeholder='Write Your Comment' />
                            <TouchableOpacity activeOpacity={0.7} >
                                <MaterialCommunityIcons name="send" style={{ marginLeft: RFPercentage(-2), fontSize: RFPercentage(3.4) }} color={'#242424'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Screen>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    videoViewContainer: {
        width: '100%',
        height: RFPercentage(30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoViewSubContainer: {
        width: RFPercentage(34),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    smallDpContainerView: {
        marginTop: RFPercentage(2.5),
        flexDirection: 'row',
        width: '100%',
        marginLeft: RFPercentage(3),
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    likeDislikeButtonsContainer: {
        marginTop: RFPercentage(1.5),
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    subscribeButton: {
        width: "100%",
        alignItems: "center",
        marginTop: RFPercentage(2.3),
        marginBottom: RFPercentage(16)
    },
    bottomContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        height: RFPercentage(40),
        width: '100%',
        backgroundColor: Colors.white,
        borderTopRightRadius: RFPercentage(5),
        borderTopLeftRadius: RFPercentage(5),
        borderTopColor: Colors.newInputFieldBorder,
        borderBottomColor: Colors.white,
        borderLeftColor: Colors.newInputFieldBorder,
        borderRightColor: Colors.newInputFieldBorder,
        borderWidth: RFPercentage(0.2)
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFPercentage(2),
        width: "90%",
        height: RFPercentage(7),
        backgroundColor: '#FAFAFA',
        borderRadius: RFPercentage(10)
    },
    timeOfVideoContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: RFPercentage(1),
        justifyContent: 'center',
        alignItems: 'center',
        width: RFPercentage(7),
        height: RFPercentage(3)
    },
    emptyLayer: {
        borderRadius: RFPercentage(3),
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    upNextVideoPageDetailContainer: {
        marginTop: RFPercentage(1.6),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    commentInputContainer: {
        width: '90%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputFieldContainer: {
        marginLeft: RFPercentage(2),
        flexDirection: 'row',
        width: RFPercentage(36),
        height: RFPercentage(7),
        borderRadius: RFPercentage(4),
        backgroundColor: '#FAFAFA',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default VideoHomeScreen;