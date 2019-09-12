import React from 'react'
import { Text, View,StyleSheet,FlatList } from 'react-native'
import * as firebase from 'firebase'
import {Card, CardItem, Item} from 'native-base'

export default class PickupList extends React.Component {

    constructor(props){
        super(props)
        this.state={
            PickupList:[]
        }
    }

    static navigationOptions={
        title:'Pickup Requests'
    }

    componentWillMount(){
        self = this
        var messageListRef = firebase.database().ref('PickUpRequests')
        messageListRef.on('value', dataSnapshot => {
            if(dataSnapshot.val()) {
                let pickupList = Object.values(dataSnapshot.val());
                this.setState({PickupList:pickupList})    
            }
        })
        this.forceUpdate()
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.PickupList} keyExtractor={(item,index)=>item.Time}
                renderItem={({item})=>(
                    <Card style={styles.listItem}>
                      <Text style={styles.messageText}>{item.Name}</Text>
                      <Text style={styles.messageText}>{item.Date}</Text>
                      <Text style={styles.messageText}>{item.Time}</Text>
                      <Text style={styles.messageText}>{item.Location}</Text>
                    </Card>
                  )}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    listContainer: {
        flex: 1,
        padding: 5,
        marginBottom:10
      },
      listItem: {
        padding: 10
      },
      messageText: {
        fontSize: 20
      },
      timeText: {
        fontSize: 10
      }
  });
