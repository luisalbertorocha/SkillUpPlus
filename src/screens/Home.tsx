import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { topics } from "../data/topics";
import { globalStyles } from "../styles/stylesheet";

export default function HomeScreen({ navigation }: any) {
  const [selectedOds, setSelectedOds] = useState("ALL");

  const filteredTopics =
    selectedOds === "ALL"
      ? topics
      : topics.filter((t) => t.ods === selectedOds);

  return (
    <View style={globalStyles.screenContainer}>

      {/* LOGO DO PROJETO */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          width: 180,
          height: 180,
          alignSelf: "center",
          marginBottom: 10,
        }}
        resizeMode="contain"
      />

      <Text style={globalStyles.title}>Temas de Estudo</Text>
      <Text style={globalStyles.subtitle}>
        Escolha um tema para ver o conteúdo detalhado.
      </Text>

      {/* Picker */}
      <View
        style={{
          marginBottom: 16,
          backgroundColor: "#1f2937",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={selectedOds}
          onValueChange={(value) => setSelectedOds(value)}
          style={{ color: "#fff" }}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Todas as ODS" value="ALL" color="#fff" />
          <Picker.Item label="ODS 4 - Educação de Qualidade" value="ODS4" color="#fff" />
          <Picker.Item label="ODS 8 - Trabalho Decente" value="ODS8" color="#fff" />
          <Picker.Item label="ODS 9 - Inovação e Infraestrutura" value="ODS9" color="#fff" />
          <Picker.Item label="ODS 10 - Redução das Desigualdades" value="ODS10" color="#fff" />
        </Picker>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredTopics.map((topic) => (
          <TouchableOpacity
            key={topic.id}
            style={[globalStyles.card, { marginBottom: 16 }]}
            onPress={() =>
              navigation.navigate("Topic", {
                title: topic.title,
                content: topic.content,
              })
            }
          >
            <Text style={[globalStyles.text, { fontSize: 18, fontWeight: "600" }]}>
              {topic.title}
            </Text>
            <Text
              style={[
                globalStyles.text,
                { marginTop: 8, color: "#9ca3af", fontSize: 14 },
              ]}
            >
              {topic.description}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
