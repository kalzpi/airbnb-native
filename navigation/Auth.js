import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

const isAndroid = Platform.OS === "android";

export default () => (
  <Auth.Navigator
    headerMode="float"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome}></Auth.Screen>
    <Auth.Screen name="SignUp" component={SignUp}></Auth.Screen>
    <Auth.Screen name="SignIn" component={SignIn}></Auth.Screen>
  </Auth.Navigator>
);
