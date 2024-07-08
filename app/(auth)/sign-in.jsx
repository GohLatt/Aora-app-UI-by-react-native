import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <SafeAreaView className="w-full h-full bg-gray-900">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-5 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[120px] h-[100px]"
          />
          <FormField
            title={"Email"}
            placeholder={"Enter your email"}
            value={form.email}
            keyboardType={"email-address"}
            onChnageText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            title={"Password"}
            placeholder={"Enter Password"}
            value={form.password}
            onChnageText={(e) => setForm({ ...form, password: e })}
          />
          <CustomButton
            title={"Sign In"}
            otherStyle={"mt-4 py-3 rounded-2xl"}
            onPress={() => router.push("/home")}
          />
          <View className="items-center mt-4">
            <Text className="text-gray-50 text-sm">
              Don't have an account?{" "}
              <Link href={"/sign-up"} className="font-semibold text-orange-400">
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#030712" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
