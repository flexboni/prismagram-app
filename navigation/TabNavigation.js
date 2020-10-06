import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import PhotoNavigation from "../navigation/PhotoNavigation";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Add() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="PhotoNavigation"
        component={PhotoNavigation}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen
      name="Add"
      component={View}
      // options={{
      //   tabPress: (navigation) => {
      //     e.preventDefault();
      //   },
      // }}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          // Prevent default action
          e.preventDefault();

          // Do something with the `navigation` object
          // navigation.navigate(PhotoNavigation);
          console.log("navigation :" + navigation.navigate("PhotoNavigation"));
        },
      })}
    />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
