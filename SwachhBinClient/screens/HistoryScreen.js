import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import * as firebase from "firebase";
import CardHistoryList from "../components/CardHistoryList";

export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateList: [],
      cardHistoryList: []
    };
    self = this;
  }

  componentWillUnmount() {
    this.setState({
      dateList: [],
      totalPoints: 0,
      cardHistoryList: []
    });
  }

  componentDidMount() {
    FBUid = "aMgjD0GXsVPNNvCXnSW3m6uMnj03";
    firebase
      .database()
      .ref(FBUid)
      .on("value", data => {
        // console.log(data);
        cardUserId = data.child("id").val();
        // alert(cardUserId);

        firebase
          .database()
          .ref("rfid_cards")
          .child(cardUserId)
          .on("value", data => {
            // this.setState({
            //   dateList: [],
            //   totalPoints: 0,
            //   cardHistoryList: []
            // });

            // console.log(data);
            data.forEach(ds => {
              // console.log(ds.numChildren());
              let cardHistoryList = {
                cardDate: ds.key,
                cardNumber: ds.numChildren()
              };
              // console.log(cardHistoryList);
              self.updateList(cardHistoryList);
              //   self.setState({
              //     totalPoints: self.state.totalPoints + ds.numChildren()
              //   });
              // console.log(self.state.totalPoints);
              // self.setState({ dateList: ds.key });
            });
          });
      });
  }

  updateList = cardHistoryLists => {
    this.setState({
      cardHistoryList: self.state.cardHistoryList.concat(cardHistoryLists)
    });
    // console.log(this.state.cardHistoryList);
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ height: 50 }}
          data={this.state.cardHistoryList}
          renderItem={({ item }) => {
            return <CardHistoryList dateMoney={item} />;
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
