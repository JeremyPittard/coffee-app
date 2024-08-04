import { Pressable } from "react-native";
import React from "react";
import TitleText from "../../Text/title-text";
import { CustomButtonProps } from "../definitions/ButtonTypes";

const Button = ({ children, className, style, ...rest }: CustomButtonProps) => {
  return (
    <Pressable>
      <TitleText>{children ? children : "Button"}</TitleText>
    </Pressable>
  );
};

export default Button;
