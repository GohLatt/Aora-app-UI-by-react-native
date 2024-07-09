import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import icons from "../constants/icons";

const FormField = ({
  title,
  value,
  onChnageText,
  placeholder,
  keyboardType,
  otherStyle,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={otherStyle}>
      <Text className="text-gray-50 mb-2 text-[16px] font-semibold">
        {title}
      </Text>
      <View className="w-full h-[50px] mb-4 rounded-2xl items-center flex-row bg-gray-700 border-2 focus:border-orange-500">
        <TextInput
          className=" flex-1 text-gray-100 px-5"
          value={value}
          onChangeText={onChnageText}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              className="w-8 h-8 mr-3"
              resizeMode="contain"
              source={!showPassword ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
