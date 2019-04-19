import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, StatusBar } from 'react-native';
import Weather from "./Weather";
import { Status } from 'expo-background-fetch';

const API_KEYS = "93a377476260084f0e64c803951180a3";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temp: null,
    name: null,
    city: null,
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        this._getWeather(pos.coords.latitude, pos.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    )
  }

  _getWeather = (lat, lon) => {
    // js 장점 
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEYS}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          temp: json.main.temp,
          name: json.weather[0].main,
          city: json.name,
          isLoaded: true
        })
      })
  }

  render() {
    const { isLoaded, error, temp, name, city, } = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather weatherName={name} temp={Math.floor(temp - 273.15)} city={city} /> :
          <View style={styles.loading}>
            <ActivityIndicator style={styles.progress} />
            <Text style={styles.loadingText}>Loading weather Info!</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>}
      </View>
    );
  }
}

// flex = 화면 비율
// html, css와 property 사용법이 다름 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: "space-around"
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 60,
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  progress: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
