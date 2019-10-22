import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class LikesTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LikesTab</Text>
      </View>
    );
  }
}

export default LikesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
