import React, { useState } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { AntDesign } from '@expo/vector-icons';

//components
import MyAppButton from '../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function Payments(props) {

    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)
    const [date, setDate] = useState(new Date())

    const handleDatePicked = date => {
        setDate(date)
    };

    const currencyData = [
        {
            date: 'Sep 21 2021',
            money: '$1548'
        },
        {
            date: 'Sep 23 2021',
            money: '$4532'
        },
        {
            date: 'Sep 27 2021',
            money: '$987'
        },
        {
            date: 'Sep 29 2021',
            money: '$18738'
        },
    ]


    return (
        <View style={{ width: '90%', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(2) }} >

            <DateTimePicker
                // textColor={Colors.primary}
                isDarkModeEnabled={true}
                isVisible={isDateTimePickerVisible}
                onConfirm={(date) => handleDatePicked(date)}
                onCancel={() => setIsDateTimePickerVisible(false)}
                mode="date"
            />

            <Text style={{ color: Colors.primary, fontSize: RFPercentage(4.5), fontWeight: 'bold' }} >
                $1128
            </Text>

            <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, marginTop: RFPercentage(1.6) }} >
                Personal Balance
            </Text>

            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
                <MyAppButton
                    title="Withdraw"
                    padding={RFPercentage(1.5)}
                    // onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"100%"}
                />
            </View>

            <View style={styles.earningOverviewContainer} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Earning Overview
                </Text>

                <View style={styles.calendarContainer} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsDateTimePickerVisible(true)} >
                        <Text style={{ fontSize: RFPercentage(1.8), color: Colors.black, marginLeft: RFPercentage(1) }} >
                            {date.toDateString()}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsDateTimePickerVisible(true)} activeOpacity={0.6} style={{ position: 'absolute', right: RFPercentage(1) }} >
                        <AntDesign name="caretdown" style={{ fontSize: RFPercentage(2) }} color={Colors.black} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Chart */}
            <Image style={{ marginTop: RFPercentage(5), width: '100%', height: RFPercentage(20), alignSelf: 'center' }} source={require('../../assets/images/chart.png')} />

            <View style={styles.withdrawnHistoryContainer} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Withdraw History
                </Text>

                <View style={styles.secondCalendar} >
                    <Text style={{ fontSize: RFPercentage(1.8), color: Colors.black, marginLeft: RFPercentage(1) }} >
                        {date.toDateString()}
                    </Text>
                    <TouchableOpacity onPress={() => setIsDateTimePickerVisible(true)} activeOpacity={0.6} style={{ position: 'absolute', right: RFPercentage(1) }} >
                        <AntDesign name="caretdown" style={{ fontSize: RFPercentage(2) }} color={Colors.black} />
                    </TouchableOpacity>
                </View>
            </View>

            {currencyData.map((item, i) => (
                <View key={i} style={styles.successMessage} >
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }} >
                        Withdraw Completed Successfully
                    </Text>
                    <Text style={{ color: '#9E9E9E', fontSize: RFPercentage(2), marginTop: RFPercentage(1) }} >
                        {item.date}
                    </Text>
                    <Text style={{ position: 'absolute', right: 0, top: RFPercentage(2), color: '#00FF80' }} >
                        {item.money}
                    </Text>
                </View>
            ))}
            <View style={{ marginBottom: RFPercentage(10) }} />

        </View>
    );
}

const styles = StyleSheet.create({
    earningOverviewContainer: {
        marginTop: RFPercentage(5),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    calendarContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        position: 'absolute',
        right: 0,
        borderRadius: RFPercentage(1.2),
        width: RFPercentage(19),
        height: RFPercentage(6.5)
    },
    withdrawnHistoryContainer: {
        marginTop: RFPercentage(5),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    secondCalendar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        position: 'absolute',
        right: 0,
        borderRadius: RFPercentage(1.2),
        width: RFPercentage(19),
        height: RFPercentage(6.5)
    },
    successMessage: {
        marginTop: RFPercentage(5),
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'center'
    }
})

export default Payments;