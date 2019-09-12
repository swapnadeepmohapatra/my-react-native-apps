import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import * as firebase from 'firebase'
import {Button,Icon} from 'native-base'
import {Entypo} from '@expo/vector-icons'
import { TabNavigator } from "react-navigation";

export default class HomeScreen extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            binStatus:'empty',
            binPercent:0,
            message:'Bin Status',
            latitude: '',
            longitude: '',
            error: null,
        }
        self = this
    }

    static navigationOptions={
        title:'e-SwachhBin',
        headerRight: (
            <Button dark rounded style={{margin:5}} icon onPress={() => {
                self.props.navigation.navigate('PickupList')
            }}>
              <Entypo size={30} name="list" color='#fff' />
            </Button>
        ),
    }

    componentWillMount(){
        firebase.database().ref().on('value', dataSnapshot => {
            var binPercent = dataSnapshot.child('garbage').val()
            this.setState({binPercent:binPercent})
            console.log(binPercent);
            this.getBinMessage()
            this.forceUpdate()
        })
    }
    
    getBinColor = () => {
        if (this.state.binPercent >= 0 && this.state.binPercent <= 10) {
            return "green"
        }else if (this.state.binPercent >= 11 && this.state.binPercent <= 90) {
            return "#F3B431"
        }else if (this.state.binPercent >= 90 && this.state.binPercent <= 100) {
            return "red"
        }else{
            return "green"
        }
    }

    getBinMessage = () => {
        var garbage = this.state.binPercent
        
        if (garbage >= 91) {
            this.setState({message:"The Dustbin is Full"});
        } else if (garbage >= 80 & garbage <= 90) {
            this.setState({message:"Clean the Dustbin right now"})
        } else if (garbage >= 0 & garbage <= 10) {
            this.setState({message:"The Dustbin is Empty"})
        } else if (garbage >= 11 & garbage <= 50) {
            this.setState({message:"The Dustbin has some Garbage"})
        } else if (garbage >= 51 & garbage <= 79) {
            this.setState({message:"Clean the dustbin if possible"})
        } else {
            this.setState({message:"error"})
        }
    }

    openBin = () => {
        firebase.database().ref().child('google').child('open').set('3')
    }

    closeBin = () => {
        firebase.database().ref().child('google').child('open').set('4')
    }

    map = () => {
        this.props.navigation.navigate('MapScreen')
    }

    getList = () => {
    }
    
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:100,width:Dimensions.get('window').width}}></View>
        <Entypo name='trash' size={150} color={this.getBinColor()} style={{marginTop:-100}}/>
        <View style={{flexDirection:'column', alignItems:'center'}}>
            <Text style={{color:'#c1c1c1', fontSize:20}}>Dustbin Status</Text>
            <Text style={{color:'#000000', fontSize:25, fontWeight:'bold'}}>Garbage Inside Dustbin</Text>
            <Text style={{color:'#99AAAB', fontSize:30,}}>{this.state.binPercent} %</Text>
            <Text style={{color:'#99AAAB', fontSize:20,}}>{this.state.message}</Text>
        </View>
        <View style={{height:100,width:Dimensions.get('window').width}}></View>
        <View style={{flexDirection:'row', width:Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center'}}>
            <Button full success style={{padding:10, flex:1, margin:10}} onPress={()=>{
                this.openBin()
            }}>
                <Text style={{color:'#fff',fontWeight:'bold'}}>Open</Text>
            </Button>
            <Button full danger style={{padding:10,flex:1, margin:10}} onPress={()=>{
                this.closeBin()
            }}>
                <Text style={{color:'#fff',fontWeight:'bold'}}>Close</Text>
            </Button>
        </View>
        <Button dark style={{padding:10, margin:10, width:(Dimensions.get('window').width/2),alignSelf:'center',alignItems:'center',justifyContent:'center'}} onPress={()=>{
            this.map()
        }}>
            <Text style={{color:'#fff',fontWeight:'bold',alignSelf:'center'}}>Get Dustbin Location</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
});
