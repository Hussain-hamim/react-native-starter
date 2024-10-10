import { Text, View } from "react-native";
import Header from "../../components/Header";

import React from "react";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        marginTop: 33,
      }}
    >
      <Header />
      <Text
        style={{
          color: "black",
          backgroundColor: "lightyellow",
        }}
      >
        Hello world! again
      </Text>
    </View>
  );
}
