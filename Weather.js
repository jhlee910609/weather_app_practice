import React, { Compoent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { IonIcons } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "for more info look outside!",
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny!",
        subtitle: "Go outside!",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually outside of the house",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "sad :(",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "#B986E5"],
        title: "Cold!",
        subtitle: "Do you wanna build snowman~",
        icon: 'ios-snowy'
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze!",
        subtitle: "Like a Mist!",
        icon: 'ios-rainy'
    }
}

function Weather({ weatherName, temp, city }) {
    return (
        // Gradient Component
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.temp}>{city}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>

        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    temp: {
        fontSize: 40,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold'
    },
    city: {
        fontSize: 25,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 5,
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 30,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 5,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 20,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 200
    }
})