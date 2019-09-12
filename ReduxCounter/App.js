import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MyCounter from './MyCounter'

const initState = {
  myCounter:0
}

const reducer = (state=initState,action) => {
  switch (action.type) {
    case 'INCREASE':
      return {myCounter : state.myCounter + 1}
    case 'DECREASE':
      if(state.myCounter >= 1){
        return {myCounter : state.myCounter - 1}
      }else{
        return state
      }
  }
  return state
}

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    console.log(initState)
    return (
      <Provider store={store}>
        <MyCounter/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
