import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Button
} from "native-base";
import { Ionicons, EvilIcons, Feather } from "@expo/vector-icons";

var images = [
  require("../../assets/1.jpg"),
  require("../../assets/2.jpg"),
  require("../../assets/3.jpg"),
  require("../../assets/4.jpg"),
  require("../../assets/5.jpg"),
  require("../../assets/6.jpg"),
  require("../../assets/7.jpg"),
  require("../../assets/8.jpg"),
  require("../../assets/user1.jpg")
];

var { width, height } = Dimensions.get("window");

class ProfileTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  segmentCliked = index => {
    this.setState({
      activeIndex: index
    });
  };

  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[{ width: width / 3 }, { height: width / 3 }, {marginBottom:2},
        index % 3 !==0 ? {paddingLeft:2} : {paddingLeft:0}
        ]}>
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      );
    });
  };

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderSectionOne()}
        </View>
      );
    }
  };

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <Header style={{ marginTop: 26, backgroundColor: "white" }}>
          <Left>
            <Ionicons
              name="ios-person-add"
              size={28}
              style={{ paddingLeft: 10 }}
            />
          </Left>
          <Body style={{ marginLeft: 80 }}>
            <Text style={{ fontWeight: "800", fontSize: 22 }}>Instagran</Text>
          </Body>
          <Right>
            <Ionicons name="ios-timer" size={22} style={{ paddingRight: 10 }} />
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={require("../../assets/user1.jpg")}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>posts</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>2165</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      followers
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>187</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      following
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 3,
                      marginLeft: 10,
                      justifyContent: "center",
                      height: 30
                    }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 1,
                      height: 30,
                      marginRight: 10,
                      marginLeft: 5,
                      justifyContent: "center"
                    }}
                  >
                    <Ionicons name="ios-settings" />
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>김코딩</Text>
              <Text> SNS | Community</Text>
              <Text>www.instagran.com</Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5"
              }}
            >
              <Button
                transparent
                onPress={() => this.segmentCliked(0)}
                active={this.state.activeIndex == 0}
              >
                <Ionicons
                  name="md-apps"
                  size={25}
                  style={[this.state.activeIndex == 0 ? {} : { color: "grey" }]}
                ></Ionicons>
              </Button>

              <Button
                transparent
                onPress={() => this.segmentCliked(1)}
                active={this.state.activeIndex == 1}
              >
                <Feather
                  name="list"
                  size={25}
                  style={[this.state.activeIndex == 1 ? {} : { color: "grey" }]}
                ></Feather>
              </Button>

              <Button
                transparent
                onPress={() => this.segmentCliked(2)}
                active={this.state.activeIndex == 2}
              >
                <Feather
                  name="folder-plus"
                  size={25}
                  style={[this.state.activeIndex == 2 ? {} : { color: "grey" }]}
                ></Feather>
              </Button>

              <Button
                transparent
                onPress={() => this.segmentCliked(3)}
                active={this.state.activeIndex == 3}
              >
                <Feather
                  name="bookmark"
                  size={25}
                  style={[this.state.activeIndex == 3 ? {} : { color: "grey" }]}
                ></Feather>
              </Button>
            </View>
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
