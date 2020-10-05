import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "../screens/Auth/SignUp";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

// const AuthNavigation = createStackNavigator(
//   {
//     AuthHome,
//     SignUp,
//     Login,
//     Confirm,
//   },
//   {
//     headerMode: "none",
//   }
// );

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AuthHome" component={AuthHome}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Confirm" component={Confirm}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
