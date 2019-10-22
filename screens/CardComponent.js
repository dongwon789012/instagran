import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Ionicons,
  EvilIcons,
  Feather,
  SimpleLineIcons
} from "@expo/vector-icons";
import {
  Card,
  CardItem,
  Thubmnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Thumbnail
} from "native-base";

class CardComponent extends React.Component {
  render() {
    const images = {
      "1": require("../assets/1.jpg"),
      "2": require("../assets/2.jpg"),
      "3": require("../assets/3.jpg"),
      "4": require("../assets/4.jpg"),
      "5": require("../assets/5.jpg"),
      "6": require("../assets/6.jpg"),
      "7": require("../assets/7.jpg"),
      "8": require("../assets/8.jpg")
    };

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../assets/user1.jpg")} />
            <Body>
              <Text>김코딩</Text>
              <Text note>jan 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Ionicons
                name="ios-heart-empty"
                size={15}
                style={{ color: "black" }}
              />
            </Button>
            <Button transparent>
              <SimpleLineIcons
                name="bubbles"
                size={15}
                style={{ color: "black" }}
              />
            </Button>
            <Button transparent>
              <Feather name="send" size={15} style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes}likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>김코딩</Text>
             치키치키차카차카초코초코초 치키치키차카차카초코초코초 치키치키차카차카초코초코초 치키치키차카차카초코초코초 치키치키차카차카초코초코초 치키치키차카차카초코초코초
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
