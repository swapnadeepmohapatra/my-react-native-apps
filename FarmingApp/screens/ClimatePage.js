import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default class ClimatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binStatus: "empty",
      binPercent: 0,
      message: "Bin Status",
      latitude: 20.3279376,
      longitude: 85.8081402,
      error: null,
      weather: "",
      main: "",
      desc: "",
      pressure: "",
      humidity: "",
      temp_max: "",
      temp_min: "",
      wind_speed: "",
      icon: "01d"
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }
  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = () => {
    // var linkUrl = `https://samples.openweathermap.org/data/2.5/weather?lat=20&lon=85&appid=b6907d289e10d714a6e88b30761fae22`;

    var urlAA = `http://api.openweathermap.org/data/2.5/weather?lat=${
      this.state.latitude
    }&lon=${
      this.state.longitude
    }&units=metric&appid=d15dd03292f642154a461b727e827316`;

    return fetch(urlAA)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson,
          weather: responseJson.main.temp,
          main: responseJson.weather[0].main,
          desc: responseJson.weather[0].description,
          icon: responseJson.weather[0].icon,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
          temp_max: responseJson.main.temp_max,
          temp_min: responseJson.main.temp_min,
          wind_speed: responseJson.wind.speed,
          name: responseJson.name
        });
        console.log(this.state.weather);
      })
      .then(() => {
        this.forceUpdate();
      });
  };

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={["#37A59F", "#66C4B8", "#9AE4D2"]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "center"
          }}
        >
          <Image
            source={{
              uri: `http://openweathermap.org/img/w/${this.state.icon}.png`
            }}
            style={{ height: 50, width: 50 }}
          />
          <Text style={{ fontSize: 30, color: "#fff" }}>{this.state.main}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10
          }}
        >
          <Text style={{ fontSize: 15, color: "#fff" }}>{this.state.name}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 100, color: "#fff", fontWeight: "bold" }}>
              {this.state.weather}°
            </Text>
          </View>
          <View style={{ flexDirection: "column" }} />
        </View>

        <Text style={{ fontSize: 20, color: "#fff", marginTop: 100 }}>
          Pressure : {this.state.pressure} Pascal
        </Text>
        <Text style={{ fontSize: 20, color: "#fff" }}>
          Humidity : {this.state.humidity}%
        </Text>
        <Text style={{ fontSize: 20, color: "#fff" }}>
          Wind Speed: {this.state.wind_speed} km/hr
        </Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#53E0BC",
    // backgroundColor: "#54A6DC",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column"
    // marginLeft: 10

    // <Text> {this.state.temp_max}°C</Text>
    // <Text> {this.state.temp_min}°C</Text>
  }
});
