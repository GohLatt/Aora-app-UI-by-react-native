import { Text, View, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import VideoCard from "../../components/VideoCard";
import Enpty from "../../components/Enpty";
const tranding = [
  {
    id: 3,
    name: "Foo Foo",
    image: images.boy,
  },

  {
    id: 2,
    name: "Phoo Phoo",
    image: images.dj,
  },
  {
    id: 1,
    name: "KyawGyi",
    image: images.fish,
  },
];

const profile = () => {
  return (
    <SafeAreaView className="h-full bg-gray-950">
      <FlatList
        data={tranding}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard item={item} />}
        ListHeaderComponent={
          <View className="px-4  my-8 justify-center items-center">
            <View className="justify-center bg-green-500 items-center border-2 border-orange-400 rounded-lg w-[80px] h-[80px]">
              <Text className="text-3xl font-semibold">G</Text>
            </View>
            <View className="flex-row gap-3">
              <View className="gap-1  justify-center items-center">
                <Text className="text-white font-semibold text-2xl">2</Text>
                <Text className="text-gray-100 text-sm">Posts</Text>
              </View>
              <View className="gap-1">
                <Text className="text-white font-semibold text-2xl">1.2K</Text>
                <Text className="text-gray-100 text-sm">followers</Text>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Enpty
            title={"No videos Found"}
            subTitle={"Be the first one upload a video "}
          />
        }
      />
    </SafeAreaView>
  );
};

export default profile;
