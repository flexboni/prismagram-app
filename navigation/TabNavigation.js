import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Text>Hello</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Search" component={SearchStack} />
    <Tab.Screen
      name="Add"
      component={View}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          // Prevent default action
          e.preventDefault();

          // Do something with the `navigation` object
          navigation.navigate("PhotoNavigation");
        },
      })}
    />
    <Tab.Screen name="Notifications" component={NotificationsStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);
