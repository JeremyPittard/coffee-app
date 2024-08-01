import { View, Text } from "react-native";
import AppNavigation from "./src/navigation/app-navigation/AppNavigation";
import { useFonts } from "expo-font";
import React, { useState, useCallback, useEffect } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    AtkinsonHyperlegible: require("./assets/fonts/Atkinson-Hyperlegible/AtkinsonHyperlegible-Regular.ttf"),
  });

  if (fontsLoaded) {
    return <AppNavigation />;
  } else {
    <View>
      <Text>...</Text>
    </View>;
  }
}
