import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Image,
  StatusBar
} from "react-native";

import { Form, Item, Input, Label, Button, Icon } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { Header } from "react-navigation";
import * as firebase from "firebase";
// import uuid from "uuid";

export default class DetailsScreen extends React.Component {
  componentDidMount() {
    var ref = firebase
      .database()
      .ref("Users")
      .child(firebase.auth().currentUser.uid);

    ref.once("value").then(function(snapshot) {
      snapshot.exists(); // true
      if (!snapshot.exists()) {
        alert("Please Enter the details");
        self.setState({
          isLoading: false,
          area: "",
          type: "",
          num: "",
          prefer: ""
        });
      } else {
        self.props.navigation.replace("Home");
      }
    });
  }
  static navigationOptions = {
    title: "Loading",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    self = this;
  }
  saveData = () => {
    var userDataRef = firebase
      .database()
      .ref("Users")
      .child(firebase.auth().currentUser.uid);
    userDataRef
      .set({
        type: this.state.type,
        area: this.state.area,
        num: this.state.num,
        prefer: this.state.prefer
      })
      .then(() => {
        this.props.navigation.replace("Home");
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="green" />
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View
          backgroundColor="#00423b"
          style={{
            height: StatusBar.currentHeight
          }}
        />
        <KeyboardAvoidingView
          style={{ flex: 1, marginTop: StatusBar.currentHeight }}
          behavior="padding"
        >
          <ScrollView style={styles.container}>
            <Form>
              <Item style={styles.inputItem} floatingLabel>
                <Label>Area of Crop</Label>
                <Input
                  value={this.state.name}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={area => this.setState({ area })}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>Type of Crop</Label>
                <Input
                  value={this.state.latestMsg}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={type => this.setState({ type })}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>No. of Plants in the area</Label>
                <Input
                  value={this.state.email}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={num => this.setState({ num })}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>Crop Prefered</Label>
                <Input
                  value={this.state.latestMsg}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={prefer => this.setState({ prefer })}
                />
              </Item>
            </Form>

            <Button
              style={styles.button}
              full
              rounded
              onPress={() => {
                this.saveData();
              }}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Button>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10
  },
  imagePicker: {
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  inputItem: {
    margin: 10
  },
  button: {
    backgroundColor: "#25D366",
    marginTop: 40,
    marginHorizontal: 100
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
