import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import Welcome from "./Components/Welcome";

export default function App() {
  return (
    <SafeAreaView>
      <View className="px-5">
      <Welcome />
        <View>
          <Text>Deine Heutige Bildschirmzeit</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
