import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import images from "../../../assets/img/images";
import { StatusBar } from "expo-status-bar";

import Animated, {
  FadeIn,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
  Easing,
  FadeOutUp,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import BodyText from "../../components/Text/BodyText";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const WelcomeScreen = () => {
  const imageRotation = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    imageRotation.value = withRepeat(
      withTiming(1, { duration: 7500, easing: Easing.linear }),
      -1
    );
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${imageRotation.value * 360}deg` }],
  }));

  return (
    <Animated.View
      className="flex-1 items-center justify-center"
      exiting={FadeOutUp}
    >
      <StatusBar style="light" />
      <AnimatedImage
        source={images.logoPng}
        className="h-32 w-32 block "
        style={[animatedStyle]}
        exiting={FadeOutUp}
      />
      <BodyText>Welc0me</BodyText>
    </Animated.View>
  );
};

export default WelcomeScreen;
