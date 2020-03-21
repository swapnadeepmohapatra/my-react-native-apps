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
import { Form, Item, Input, Label, Button } from "native-base";

export default class CalcPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area: 0,
      plants: 0,
      chem: 0
    };
  }

  calc = (plants, area) => {
    var chem = (area / plants) * 2.5;
    this.setState({ chem });
    alert(`Amount of chemical to be used :${chem} ml`);
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
        keyboardVerticalOffset={-200}
      >
        <ScrollView>
          <View style={{ marginBottom: 20 }}>
            <Form style={styles.form}>
              <Item floatingLabel>
                <Label style={{ color: "#586776" }}>Area in m²</Label>
                <Input
                  style={{ color: "#000" }}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  onChangeText={area => {
                    this.setState({ area });
                  }}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: "#586776" }}>
                  Number of plants approx.
                </Label>
                <Input
                  style={{ color: "#000" }}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={plants => {
                    this.setState({ plants });
                  }}
                />
              </Item>
              <Button
                style={styles.button}
                full
                rounded
                onPress={() => {
                  this.calc(this.state.plants, this.state.area);
                }}
              >
                <Text style={styles.buttonText}>Calculate</Text>
              </Button>
            </Form>
            <View style={styles.footer}>
              <Text style={{ fontSize: 20 }}>
                Amount of chemical to be used : {this.state.chem} ml
              </Text>
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
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 50,
    backgroundColor: "#25D366"
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  },
  text: {
    color: "#7BBF6A",
    fontSize: 28,
    marginTop: 10,
    fontWeight: "bold"
  }
});
