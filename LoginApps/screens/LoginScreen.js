import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";

export default class LoginScreen extends React.Component {
  componentDidMount() {
    if (firebase.auth().currentUser === null) {
      this.props.navigation.navigate("Login");
    } else {
      this.props.navigation.navigate("Home");
    }
  }
  logIn = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        "1295717870596877",
        {
          permissions: ["public_profile"]
        }
      );
      if (type === "success") {
        const credentials = firebase.auth.FacebookAuthProvider.credential(
          token
        );

        firebase
          .auth()
          .signInWithCredential(credentials)
          .then(user => {
            console.log(user);
            alert(`Hi ${user.user.displayName}!`);
          })
          .catch(error => {
            alert(error);
          });
        alert(firebase.auth().currentUser.displayName);
        this.props.navigation.navigate("Home");
      } else {
        alert("Canceled");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <Button
          title="FB Login"
          onPress={() => {
            this.logIn();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
