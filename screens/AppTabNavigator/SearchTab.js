import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class SearchTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SearchTab</Text>
      </View>
    );
  }
}

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
