import React from 'react';
import { Text } from 'react-native'

//components
import Screen from './../components/Screen';
//config
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomeScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <Text>Home</Text>
        </Screen>
    );
}

export default HomeScreen;