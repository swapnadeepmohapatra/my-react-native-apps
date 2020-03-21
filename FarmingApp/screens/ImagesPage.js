import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import * as firebase from "firebase";

export default class ImagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chats: [] };
    self = this;
  }

  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("images")
      .on("value", dataSnapshot => {
        let userResult = Object.values(dataSnapshot.val());
        let userKey = Object.keys(dataSnapshot.val());

        userKey.forEach((val, key) => {
          userResult[key]["key"] = val;
        });

        this.setState({ chats: userResult });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginHorizontal: 5, marginVertical: 5, fontSize: 20 }}>
          Thermal Images
        </Text>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: Dimensions.get("window").width - 20,
              height: 1,
              backgroundColor: "#DAE0E2"
            }}
          />
        </View>
        <FlatList
          style={{ marginTop: 5 }}
          data={this.state.chats}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderColor: "#c1c1c1",
                  borderWidth: 2
                }}
              >
                <Image
                  source={{ uri: item.url }}
                  style={{
                    height: 200,
                    width: Dimensions.get("window").width - 4
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    flexDirection: "column"
  }
});
