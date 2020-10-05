import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen
      name="Add"
      listeners={{
        tabPress: (e) => {
          // Prevent default action
          e.preventDefault();
          console.log("Add");
        },
      }}
    />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

// const TabNavigation = createBottomTabNavigator({
//   Home,
//   Search,
//   Add: {
//     screen: View,
//     navigationOptions: {
//       tabBarOnPress: () => {
//         console.log("Add");
//       },
//     },
//   },
//   Notifications,
//   Profile,
// });

// export default createAppContainer(TabNavigation);
