import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Dimensions
} from "react-native";

export default class AllPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    };
  }

  componentDidMount() {
    this.getUserFromAPI();
  }

  _keyExtractor = (user, index) => index;

  refresh = () => {
    this.setState({ dataSource: [] });
    this.forceUpdate();
    this.getUserFromAPI();
  };

  getUserFromAPI = () => {
    var url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=6349915ffd8846b289685da28b19cc34";
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.concat(responseJson.articles)
        });
      })
      .catch(error => console.log(error));
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    if (this.state.isLoading == true) {
      return (
        <View style={styles.progress}>
          <ActivityIndicator size="large" color="#FACD03" />
        </View>
      );
    }

    return (
      <View>
        <FlatList
          keyExtractor={this._keyExtractor}
          data={this.state.dataSource}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  borderRadius: 7,
                  marginHorizontal: 5,
                  //   backgroundColor: "#333333",
                  //   backgroundColor: "#454545",
                  marginVertical: 5,
                  padding: 10
                }}
              >
                <Image
                  style={{
                    height: (Dimensions.get("screen").width - 30) * 0.6,
                    width: Dimensions.get("screen").width - 30,
                    alignSelf: "center",
                    borderRadius: 15,
                    marginBottom: 5
                  }}
                  source={{ uri: item.urlToImage }}
                />
                <Text
                  style={{ color: "#EAF0F1", fontSize: 20, fontWeight: "900" }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: "#a4a4a4" }}>{item.description}</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  progress: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
