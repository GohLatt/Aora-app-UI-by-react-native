import { View, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import icons from "../constants/icons";

const SearchBar = ({ value, onChnageText }) => {
  return (
    <View className="w-full h-[50px] mb-4 rounded-2xl items-center flex-row bg-gray-700 border-2 focus:border-orange-500">
      <TextInput
        className=" flex-1 text-gray-100 px-5"
        value={value}
        onChangeText={onChnageText}
        placeholder={"Search a video topic"}
        placeholderTextColor="#9ca3af"
      />

      <TouchableOpacity>
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
