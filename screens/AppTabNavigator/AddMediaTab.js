import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class AddMediaTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AddMediaTab</Text>
      </View>
    );
  }
}

export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
