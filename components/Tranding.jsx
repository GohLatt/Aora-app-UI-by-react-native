import { View, Text, FlatList, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useState } from "react";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrandingItem = ({ activeItem, item }) => {
  return (
    <Animatable.View
      className="mr-3 ml-2 my-7 overflow-hidden rounded-lg"
      animation={activeItem === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      <View className="overflow-hidden rounded-lg">
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          className="w-[180px] h-[200px] rounded-lg"
        />
      </View>
    </Animatable.View>
  );
};

const Tranding = ({ post }) => {
  const [activeItem, setActiveItem] = useState(post[0]);

  const viewAbleItemChanged = ({ viewableItems }) => {
    console.log("data", viewableItems);
    if (post.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 70,
  };
  return (
    <FlatList
      data={post}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TrandingItem activeItem={activeItem} item={item} />
      )}
      horizontal
      onViewableItemsChanged={viewAbleItemChanged}
      viewabilityConfig={viewabilityConfig}
      contentOffset={{ x: 130 }}
    />
  );
};

export default Tranding;
