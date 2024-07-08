import { View, Text, Image } from "react-native";
import React from "react";

const VideoCard = ({ item }) => {
  return (
    <View className="w-full mb-7 px-4">
      <View className=" flex-col gap-4 w-full ">
        <View className="flex-row items-center">
          <View className="w-10 h-10 rounded-lg bg-green-400 mr-3 border-2 border-orange-400 justify-center items-center">
            <Text className="text-lg">{`${item.name}`.slice(0, 1)}</Text>
          </View>
          <View>
            <Text className="text-gray-50 text-sm">{item.title}</Text>
            <Text className="text-white text-base">{item.name}</Text>
          </View>
        </View>
        <Image
          source={item.image}
          resizeMode="cover"
          className="w-full  h-[200px] rounded"
        />
      </View>
    </View>
  );
};

export default VideoCard;
