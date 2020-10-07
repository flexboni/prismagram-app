import React from "react";
import { View } from "react-native";
import AuthNavigation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default () => {
  // const isLoggedIn = useIsLoggedIn();
  const isLoggedIn = true;
  return (
    <View style={{ flex: "1" }}>
      <NavigationContainer>
        {isLoggedIn ? <TabNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </View>
  );
};
