import { View, Text, Image } from "react-native";
import React from "react";
import images from "../constants/images";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const Enpty = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[300px] h-[200px]"
      />
      <View>
        <Text className="text-center mb-1 text-gray-100 font-semibold text-xl">
          {title}
        </Text>
        <Text className="text-center text-gray-300 text-sm">{subTitle}</Text>
      </View>
      <CustomButton
        title={"Create Videos"}
        otherStyle={"w-full rounded-2xl py-2 mt-5"}
        onPress={() => router.push("/create")}
      />
    </View>
  );
};

export default Enpty;
