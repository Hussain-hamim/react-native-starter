import { Text, View } from "react-native";
import Header from "../../components/Header";

import React from "react";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#495E57",
        justifyContent: "space-between",
      }}
    >
      <Header />

      <Footer />
    </View>
  );
}
