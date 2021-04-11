import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";

const Header = ({ title }) => {
  return (
    <View
      style={{
        // backgroundColor: COLORS.blue,
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Side Drawer */}

      <TouchableOpacity
        style={{
          width: 45,
          height: 45,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => console.log("=== Side Drawer")}
      >
        <Image
          source={icons.side_drawer}
          resizeMode="contain"
          style={{ width: 25, height: 25, tintColor: COLORS.white }}
        />
      </TouchableOpacity>
      {/* title */}

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>ASIA</Text>
      </View>

      {/* Profile */}

      <TouchableOpacity
        onPress={() => {
          console.log("=== Profile");
        }}
      >
        <Image
          source={images.profile_pic}
          style={{ width: 45, height: 45, borderRadius: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
