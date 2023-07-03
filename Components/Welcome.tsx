import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Welcome() {
  const [name, setName] = useState("Max Mustermann");
  return (

        <View className="bg-red-100 flex-row justify-between p-4 items-center rounded-xl shadow-black shadow-md">
          <View className="gap-3">
            <View>
              <Text className="text-3xl font-semibold">Willkommen</Text>
              <Text className="text-xl">{name}</Text>
            </View>
            <View>
              <Text className="">Streak</Text>
              <View className="flex-row items-end">
                <Ionicons name="ios-flame" size={32} color="red" />
                <Text className="text-3xl">
                  3 <Text className="text-xl">Days</Text>
                </Text>
              </View>
            </View>
          </View>

          <View className="col-span-1">
            <Image
              source={require("../assets/person.jpeg")}
              className="rounded-full w-32 h-32"
            />
          </View>
        </View>
  )
}
