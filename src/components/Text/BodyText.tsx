import React from "react";
import { Text, TextProps } from "react-native";

const BodyText = ({
  children,
  className,
  style,
  ...rest
}: React.PropsWithChildren<TextProps>) => (
  <Text className={`text-lg font-atkinson`} style={style} {...rest}>
    {children}
  </Text>
);

export default BodyText;
