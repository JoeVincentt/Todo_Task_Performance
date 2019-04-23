import React from "react";
import { Text } from "react-native";

export const LightText = props => (
  <Text {...props} style={[props.style, { fontFamily: "Roboto-Light" }]} />
);
export const BoldItalicText = props => (
  <Text {...props} style={[props.style, { fontFamily: "Roboto-BoldItalic" }]} />
);
export const ItalicText = props => (
  <Text {...props} style={[props.style, { fontFamily: "Roboto-Italic" }]} />
);
export const RegularText = props => (
  <Text {...props} style={[props.style, { fontFamily: "Roboto-Regular" }]} />
);
