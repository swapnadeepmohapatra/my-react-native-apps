import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class MapScreen extends React.Component {

    constructor(props){
        super(props)
        this.state={
            binStatus:'empty',
            binPercent:0,
            message:'Bin Status',
            latitude: 20.3279376,
            longitude: 85.8081402,
            error: null,
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
           (position) => {
             console.log("wokeeey");
             console.log(position);
             this.setState({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               error: null,
             });
           },
           (error) => this.setState({ error: error.message }),
           { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }

    render() {
        return (
            <MapView style={styles.container}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            
          >
          <Marker coordinate={{latitude: this.state.latitude,longitude: this.state.longitude}}  title={"Dustbin Location"}/>
          </MapView>
        )
    }
}

const styles = StyleSheet.create({container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },})
