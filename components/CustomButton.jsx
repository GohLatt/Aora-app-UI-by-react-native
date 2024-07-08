import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, otherStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-orange-400 w-full rounded ${otherStyle}`}
    >
      <Text className="text-lg font-bold text-center text-gray-950">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
