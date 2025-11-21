import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { globalStyles } from "../styles/stylesheet";



export default function TopicScreen({ route }: any) {
  const { title, content } = route.params;

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>{title}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[globalStyles.text, { lineHeight: 22 }]}>{content}</Text>
      </ScrollView>
    </View>
  );
}