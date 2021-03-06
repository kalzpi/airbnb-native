import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  padding-left: 20;
`;

const isAndroid = Platform.OS === "android";

export default () => (
  <Container>
    <Ionicons name={isAndroid ? "md-arrow-down" : "ios-arrow-down"} size={30} />
  </Container>
);
