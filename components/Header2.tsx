import React from "react";
import { Text, View } from "react-native";

export default function Header2(params: any) {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#F4CE14" }}>
      <Text style={{ padding: 40, fontSize: 30, color: "black" }}>
        Welcome to our website
      </Text>
    </View>
  );
}
