import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Button, Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
  componentDidMount() {}
  static navigationOptions = {
    title: "e-SwachhBin"
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 150,
            width: Dimensions.get("screen").width - 30,
            backgroundColor: "#00adb5",
            borderRadius: 20,
            elevation: 10,
            marginTop: 10
          }}
        >
          <Text
            style={{
              marginStart: 15,
              marginTop: 15,
              fontWeight: "normal",
              fontSize: 24,
              color: "#fff"
            }}
          >
            Total Points
          </Text>
          <Text
            style={{
              marginStart: 20,
              marginTop: 2,
              fontSize: 20,
              color: "#EAF0F1"
            }}
          >
            5124
          </Text>
          <View
            style={{
              width: Dimensions.get("window").width - 50,
              height: 0.25,
              marginTop: 5,
              backgroundColor: "#a5dee5",
              alignSelf: "center"
            }}
          />
          <Text
            style={{
              marginStart: 20,
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 32,
              color: "#fff"
            }}
          >
            ₹ 51.24
          </Text>
        </View>

        <Button
          rounded
          style={{
            width: 150,
            backgroundColor: "#22b9ca",
            alignSelf: "center",
            marginTop: 15,
            elevation: 2
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              width: 150,
              fontSize: 16
            }}
          >
            Reedem
          </Text>
        </Button>

        <View style={{ position: "absolute", bottom: 0 }}>
          <Button
            style={{
              backgroundColor: "#f08a5d",
              alignSelf: "center",
              borderRadius: 10,
              elevation: 5,
              margin: 15
            }}
          >
            <Text style={{ color: "#fff", margin: 10, fontWeight: "900" }}>
              Instructions To Use e-SwachhBin
            </Text>
          </Button>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 25,
              justifyContent: "space-around",
              width: Dimensions.get("screen").width
            }}
          >
            <Button
              style={{
                backgroundColor: "#ff2e63",
                alignSelf: "center",
                borderRadius: 5,
                elevation: 2
              }}
            >
              <Text style={{ color: "#fff", margin: 10, fontWeight: "bold" }}>
                Isue New Card
              </Text>
            </Button>
            <Button
              style={{
                backgroundColor: "#614ad3",
                alignSelf: "center",
                borderRadius: 5,
                elevation: 2
              }}
            >
              <Text style={{ color: "#fff", margin: 10, fontWeight: "bold" }}>
                Request for Pickup
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});

// <View style={{ flexDirection: "column" }}>
//           <View
//             style={{
//               flexDirection: "row",
//               marginTop: 30
//             }}
//           >
//             <TouchableOpacity style={{ alignItems: "center", margin: 10 }}>
//               <Entypo
//                 name="location"
//                 size={Dimensions.get("screen").width / 3 - 20}
//                 color="#EA7773"
//               />
//               <Text>Locate Dustbin</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={{ alignItems: "center", margin: 10 }}>
//               <Icon
//                 name="cart"
//                 style={{
//                   fontSize: Dimensions.get("screen").width / 3 - 20,
//                   color: "#EA7773"
//                 }}
//               />
//               <Text>Doante Food</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={{ alignItems: "center", margin: 10 }}>
//               <Entypo
//                 name="trash"
//                 size={Dimensions.get("screen").width / 3 - 20}
//                 color="#EA7773"
//               />
//               <Text>Request New Bins</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
