import React, { Compoent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "for more info look outside!",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny!",
        subtitle: "Go outside!",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually outside of the house",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "It's cloudy :(",
        icon: 'weather-snowy-rainy'
    },
    Snow: {
        colors: ["#7DE2FC", "#B986E5"],
        title: "Cold!",
        subtitle: "Do you wanna build snowman~",
        icon: 'weather-snowy'
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze!",
        subtitle: "Going to Picnic is bad :(",
        icon: 'weather-hail'
    },
    Mist: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Mist!",
        subtitle: "Like a Mist!",
        icon: 'weather-hail'
    }
}

// state 없는 컴포넌트는 함수형식으로 정의할 수 있음
function Weather({ weatherName, temp, city }) {
    return (
        // Gradient Component
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons
                color="white" size={130}
                name={weatherCases[weatherName].icon} 
                />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.city}>{city}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>

        </LinearGradient>
    )
}

// 아래와 같이 propTypes 설정 가능 
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    weatherName: PropTypes.string.isRequired
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
        fontWeight: "bold",
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
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 20,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 200
    }
})