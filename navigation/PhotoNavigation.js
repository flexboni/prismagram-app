import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";

const Tab = createMaterialTopTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator position="bottom">
      <Tab.Screen name="SelectPhoto" component={SelectPhoto} />
      <Tab.Screen name="TakePhoto" component={TakePhoto} />
    </Tab.Navigator>
  </NavigationContainer>
);
