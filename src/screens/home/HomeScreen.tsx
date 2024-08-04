import { View, Text, BackHandler } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { executeNativeBackPress } from "react-native-screens";
import SearchFilter from "./search/SearchFilter";
import TitleText from "../../components/Text/title-text";

const HomeScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Exit the app using executeNativeBackPress
        executeNativeBackPress();
        return true; // Prevent default behavior
      };

      // Add event listener for hardware back press
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      // Clean up the event listener when the screen loses focus
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <View className="flex-1 items-center justify-center">
      <SearchFilter />
    </View>
  );
};

export default HomeScreen;
