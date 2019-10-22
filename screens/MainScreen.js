import React from "react";
import { StyleSheet, View, Text, Platform, Animated } from "react-native";
import { Ionicons, EvilIcons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeTab from "./AppTabNavigator/HomeTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import { createAppContainer } from "react-navigation";

class MainScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <TabNavigator />;
  }
}

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    SearchTab: {
      screen: SearchTab,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    AddMediaTab: {
      screen: AddMediaTab,
      navigationOptions: {
        tabBarLabel: "AddMedia",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle-outline" color={tintColor} size={24} />
        )
      }
    },
    LikesTab: {
      screen: LikesTab,
      navigationOptions: {
        tabBarLabel: "Likes",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-heart-empty" color={tintColor} size={24} />
        )
      }
    },
    ProfileTab: {
      screen: ProfileTab,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);

const TabNavigator = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
