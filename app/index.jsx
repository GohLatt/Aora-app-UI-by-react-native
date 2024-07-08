import { Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imgae from "../constants/images";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="h-full  bg-gray-950 px-5">
      <ScrollView contentContainerStyles={{ height: "100%" }}>
        <View className="w-full min-h-[100vh] justify-center items-center ">
          <Image
            source={imgae.logo}
            resizeMode="contain"
            className="w-[135px] h-[60px]"
          />
          <Image
            source={imgae.cards}
            resizeMode="contain"
            className="w-full max-w-[380px] h-[300px]"
          />
          <View className="mt-4 relative">
            <Text className="text-center text-3xl font-bold text-white">
              Discover Endless Possibilities with{" "}
              <Text className=" text-orange-500">Aoras</Text>
            </Text>
            <Image
              source={imgae.path}
              resizeMode="contain"
              className="w-[80px] h-[100px] absolute top-6 right-0"
            />
          </View>
          <View className="mt-4">
            <Text className="text-center text-gray-200 text-sm">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
          </View>
          <CustomButton
            onPress={() => router.push("/sign-in")}
            title={"Continue with email"}
            otherStyle="mt-10 py-3"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;
