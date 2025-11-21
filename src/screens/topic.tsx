import React from "react";
import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../styles/stylesheet";
import { topics } from "../data/topics";

export default function TopicScreen({ route }: any) {
  const defaultTopic = topics[0];

  const { title, content } = route?.params || {
    title: defaultTopic.title,
    content: defaultTopic.content,
  };

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>{title}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[globalStyles.text, { lineHeight: 22 }]}>
          {content}
        </Text>
      </ScrollView>
    </View>
  );
}
