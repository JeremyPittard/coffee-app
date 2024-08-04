import React from "react";
import { Text } from "react-native";
import { CustomTextProps } from "../definitions/TextType";

const BodyText = ({ children, className, style, ...rest }: CustomTextProps) => (
  <Text className={`text-lg font-atkinson`} style={style} {...rest}>
    {children}
  </Text>
);

export default BodyText;
