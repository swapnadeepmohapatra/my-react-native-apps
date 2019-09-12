import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from "react-native";
import * as firebase from "firebase";
import { Form, Item, Input, Label, Button } from "native-base";

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  signupUser = (name, email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        return user.user
          .updateProfile({ displayName: name })
          .then(() => {
            firebase
              .database()
              .ref()
              .child("Users")
              .child(user.user.uid)
              .set({
                name: name,
                email: email,
                uid: user.user.uid
              });
          })
          .then(() => {
            this.props.navigation.replace("Home");
          })
          .catch(error => {
            console.log(error);
          });
      })

      .catch(error => {
        alert(error.message);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
      >
        <ScrollView>
          <View style={styles.logoContainer}>
            <Image
              // source={require("../src/logo.png")}
              style={{ height: 150, width: 150 }}
            />
            <Text style={styles.text}>WhatsApp</Text>
          </View>
          <View>
            <Form style={styles.form}>
              <Item floatingLabel>
                <Label style={{ color: "#f7be16" }}>Name</Label>
                <Input
                  style={{ color: "#000" }}
                  autoCorrect={false}
                  autoCapitalize="words"
                  keyboardType="name-phone-pad"
                  onChangeText={name => {
                    this.setState({ name });
                  }}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: "#f7be16" }}>Email</Label>
                <Input
                  style={{ color: "#000" }}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={email => {
                    this.setState({ email });
                  }}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: "#f7be16" }}>Password</Label>
                <Input
                  style={{ color: "#000" }}
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={password => {
                    this.setState({ password });
                  }}
                />
              </Item>
              <Button
                style={styles.button}
                full
                rounded
                onPress={() => {
                  this.signupUser(
                    this.state.name,
                    this.state.email,
                    this.state.password
                  );
                }}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </Button>
            </Form>
            <View style={styles.footer}>
              <Text>OR</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Signin");
                }}
              >
                <Text>Already having an Account ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FFDD00"
  },
  buttonText: {
    color: "#000"
  },
  footer: {
    alignItems: "center"
  },
  text: {
    color: "#f7be16",
    fontSize: 28,
    marginTop: 10,
    fontWeight: "bold"
  }
});
