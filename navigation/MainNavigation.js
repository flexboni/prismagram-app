import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="TabNavigation" component={TabNavigation}></Stack.Screen>
    <Stack.Screen
      name="PhotoNavigation"
      component={PhotoNavigation}
    ></Stack.Screen>
    <Stack.Screen
      name="MessageNavigation"
      component={MessageNavigation}
    ></Stack.Screen>
  </Stack.Navigator>
);
