import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, otherStyle }) => {
  return (
    <TouchableOpacity className={`bg-orange-400 w-full rounded ${otherStyle}`}>
      <Text className="text-lg text-center text-gray-950">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
