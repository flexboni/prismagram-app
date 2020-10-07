import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";

const Tab = createMaterialBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="SelectPhoto" component={SelectPhoto} />
    <Tab.Screen name="TakePhoto" component={TakePhoto} />
  </Tab.Navigator>
);
