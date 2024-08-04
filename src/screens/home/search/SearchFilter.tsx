import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <View className="mx-4 flex-row items-center rounded-sm border-2 border-black/5 p-2">
      <Pressable
        className="bg-white rounded-sm p-3 active:opacity-20"
        onPress={() => handleSearch(searchTerm)}
      >
        <SimpleLineIcons name="magnifier" size={24} color="black" />
      </Pressable>
      <TextInput
        placeholder="do the thing"
        value={searchTerm}
        className="text-lg flex-1 px-4 py-2 font-atkinson"
        onChangeText={(text) => setSearchTerm(text)}
      />
      {searchTerm.length > 2 ? (
        <Pressable
          className="bg-white rounded-sm p-3 active:opacity-20"
          onPress={handleClearSearch}
        >
          <SimpleLineIcons name="close" size={24} color="black" />
        </Pressable>
      ) : null}
    </View>
  );
};

export default SearchFilter;

{
  /* <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-2">
          <TextInput
            placeholder="Search"
            placeholderTextColor={"black"}
            className="text-lg flex-1 mb-1 pl-3 tracking-wider"
          />
          <Pressable
            className="bg-white rounded-full p-3 active:opacity-20"
            hitSlop={40}
            onPress={() => console.log("Pressed")}
          >
            <MagnifyingGlassIcon size={20} strokeWidth={3} color={"black"} />
          </Pressable>
        </View> */
}
