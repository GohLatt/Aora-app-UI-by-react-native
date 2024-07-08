import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import SearchBar from "../../components/SearchBar";
import Tranding from "../../components/Tranding";
import Enpty from "../../components/Enpty";
import VideoCard from "../../components/VideoCard";

const postData = [
  {
    id: 3,
    name: "Foo Foo",
    image: images.thumbnail,
    title: "Dog photo using AI",
  },

  {
    id: 2,
    name: "Phoo Phoo",
    image: images.cat,
    title: "Cat photo using AI",
  },
  {
    id: 1,
    name: "KyawGyi",
    image: images.dragon,
    title: "Dragon photo using AI",
  },
  {
    id: 5,
    name: "Foo Foo",
    image: images.fish,
    title: "Fish photo using AI",
  },
];

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
const Home = () => {
  return (
    <SafeAreaView className="w-full h-full bg-gray-950">
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard item={item} />}
        ListHeaderComponent={
          <View className="px-4 my-5">
            <View className=" flex-row justify-between items-center">
              <View>
                <Text className="text-gray-300 text-base">
                  React Native Dev
                </Text>
                <Text className="text-gray-300 text-2xl font-semibold">
                  Goo Latt
                </Text>
              </View>
              <Image
                resizeMode="contain"
                source={images.logo}
                className="w-[100px] h-[100px]"
              />
            </View>
            <SearchBar />
            <View>
              <Text className="text-lg font-semibold text-gray-300 ">
                Tranding
              </Text>
              <Tranding post={tranding} />
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

export default Home;
