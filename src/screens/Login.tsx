import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/stylesheet";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarLogin = () => {
    if (email !== "teste@teste.com" || senha !== "123") {
      return Alert.alert("Erro", "Email ou senha inválidos!");
    }
    navigation.replace("App");
  };

  return (
    <View style={globalStyles.centeredContainer}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Login</Text>

        <Text style={globalStyles.inputLabel}>Email</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={globalStyles.inputLabel}>Senha</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          onSubmitEditing={validarLogin}
        />

        <TouchableOpacity style={globalStyles.button} onPress={validarLogin}>
          <Text style={globalStyles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
