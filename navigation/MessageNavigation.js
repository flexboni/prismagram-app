import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Message from "../screens/Messages/Message";
import Messages from "../screens/Messages/Messages";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={Messages}></Stack.Screen>
      <Stack.Screen name="Message" component={Message}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
