import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import { router, usePathname } from "expo-router";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  const handleSearch = () => {
    if (!query)
      return Alert.alert("Query Missing", "Please enter you want to search");

    if (pathname.startsWith("/search")) {
      router.setParams({ query });
    } else router.push(`/search/${query}`);
  };
  return (
    <View className="w-full h-[50px] mb-4 rounded-2xl items-center flex-row bg-gray-700 border-2 focus:border-orange-500">
      <TextInput
        className=" flex-1 text-gray-100 px-5"
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholder={"Search a video topic"}
        placeholderTextColor="#9ca3af"
      />

      <TouchableOpacity onPress={handleSearch}>
        <Image
          className="w-5 h-5 mr-3"
          resizeMode="contain"
          source={icons.search}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
