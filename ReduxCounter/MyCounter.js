import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { connect } from 'react-redux'

class MyCounter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{margin:20, fontSize:20}}>{this.props.myCounter}</Text>
        <View style={{flexDirection:"row", justifyContent:'space-around'}}>
            <Button title='Increase' onPress={()=>{this.props.inc()}}/>
            <Button title='Decrease' onPress={()=>{this.props.dec()}}/>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
    return{
        myCounter:state.myCounter
    }
}

function mapDispatchToProps(dispatch){
    return{
        inc:()=>dispatch({
            type:'INCREASE'
        }),
        dec:()=>dispatch({
            type:'DECREASE'
        })
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(MyCounter)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
