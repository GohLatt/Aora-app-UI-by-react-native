import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import VideoCard from "../../components/VideoCard";
import SearchBar from "../../components/SearchBar";
import images from "../../constants/images";
import Enpty from "../../components/Enpty";
import { useLocalSearchParams } from "expo-router";

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
  {
    id: 6,
    name: "Goo Latt",
    image: images.fish,
    title: "lion photo using AI",
  },
];

const SearchPage = () => {
  const { query } = useLocalSearchParams();
  const filterData = postData.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <SafeAreaView className="w-full h-full bg-gray-950">
      <FlatList
        data={filterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard item={item} />}
        ListHeaderComponent={
          <View className="px-4 my-5">
            <SearchBar />
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

export default SearchPage;
