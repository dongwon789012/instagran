import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import CardComponent from "../CardComponent";
import { Ionicons, EvilIcons, Feather } from "@expo/vector-icons";
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from "native-base";

const { height, width } = Dimensions.get("window");

class HomeTab extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ marginTop: 26, backgroundColor: "white" }}>
          <Left>
            <EvilIcons name="camera" size={32} style={{ paddingLeft: 10 }} />
          </Left>
          <Body style={{ marginLeft: 80 }}>
            <Text style={{ fontWeight: "800", fontSize: 22 }}>Instagran</Text>
          </Body>
          <Right>
            <Feather name="send" size={22} style={{ paddingRight: 10 }} />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Stories</Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}>watch All</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/user2.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/user3.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/user4.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/user5.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/user6.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/user7.jpg")}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={require("../../assets/user8.jpg")}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="23" />
          <CardComponent imageSource="3" likes="34" />
          <CardComponent imageSource="4" likes="321" />
          <CardComponent imageSource="5" likes="456" />
          <CardComponent imageSource="6" likes="234" />
          <CardComponent imageSource="7" likes="567" />
          <CardComponent imageSource="8" likes="21" />
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
