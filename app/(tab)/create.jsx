import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { ResizeMode, Video } from "expo-av";
import icon from "../../constants/icons";
import CustomButton from "../../components/CustomButton";
import * as documentPicker from "expo-document-picker";

const Create = () => {
  const [form, setForm] = useState({
    title: "",
    video: "",
    img: "",
    promt: "",
  });

  const paker = async (selectType) => {
    const result = await documentPicker.getDocumentAsync({
      type:
        selectType === "image"
          ? ["image/png", "image/jpg"]
          : ["video/mp4", "video/gif"],
    });

    if (!result.canceled) {
      if (selectType === "image") {
        setForm({ ...form, img: result.assets[0] });
      }

      if (selectType === "video") {
        setForm({ ...form, video: result.assets[0] });
      }
    } else {
      Alert.alert("DocummentPicker", "No Item selected");
    }
  };
  return (
    <SafeAreaView className="w-full h-full bg-gray-950">
      <ScrollView>
        <View className="px-4 w-full h-full">
          <Text className="text-white text-2xl font-semibold">Upload</Text>
          <FormField
            value={form.title}
            title={"Video Title"}
            placeholder={"Enter video Tittle to catch"}
            otherStyle={"mt-4"}
            onChnageText={(e) => setForm({ ...form, title: e })}
          />

          <View className="my-5">
            <Text className="text-gray-100 mb-1">Upload Video</Text>
            <View className="w-full h-40 bg-gray-600 rounded-lg justify-center items-center">
              {form?.video ? (
                <Video
                  source={form.video}
                  resizeMode={ResizeMode.COVER}
                  isLooping
                  className="w-full h-40 rounded-lg"
                  useNativeControls
                />
              ) : (
                <TouchableOpacity
                  onPress={() => paker("video")}
                  className="w-16 h-16 border-dotted border-[2px] border-orange-500 rounded-lg justify-center items-center"
                >
                  <Image
                    source={icon.upload}
                    resizeMode="cover"
                    className="w-10 h-10"
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View className="my-5">
            <Text className="text-gray-100 mb-1">Upload Video</Text>
            <View className="w-full h-12 bg-gray-600 rounded-lg justify-center items-center">
              {form?.img ? (
                <Image
                  source={form.img}
                  resizeMode="cover"
                  className="w-[100%] h-[100%]"
                />
              ) : (
                <TouchableOpacity
                  onPress={() => paker("image")}
                  className="flex-row gap-1 justify-center items-center"
                >
                  <Image
                    source={icon.upload}
                    resizeMode="cover"
                    className="w-5 h-5"
                  />
                  <Text className="text-white text-sm font-semibold">
                    Choose a file
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <FormField
            title={"AI Promot"}
            placeholder={"Enter description"}
            value={form.promt}
            onChnageText={(e) => setForm({ ...form, promt: e })}
            otherStyle={"my-5"}
          />
          <CustomButton
            title={"Submit & Publish"}
            otherStyle={"py-3 rounded-xl"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
