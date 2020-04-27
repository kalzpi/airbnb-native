import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Dimensions } from "react-native";
import PropTypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Button = styled.View`
  padding: 15px 0px;
  border-radius: 8px;
  align-items: center;
  width: ${width / 2}px;
  background-color: ${(props) => (props.accent ? colors.red : "transparent")};
  border: 1px solid ${(props) => (props.accent ? "transparent" : colors.black)};
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "white" : "black")};
`;

const Btn = ({ onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress}>
    <Button accent={accent}>
      <Text accent={accent}>{text}</Text>
    </Button>
  </TouchableOpacity>
);

Btn.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};

export default Btn;
