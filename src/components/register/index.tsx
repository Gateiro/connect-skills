// Componente de UI: Componente visual da tela de Cadastro.

import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Register() {
  const router = useRouter(); // Para voltar ao login

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Validação simples
  const canSubmit = name.trim() && email.trim() && password.trim() && password === confirmPassword && !loading;

  async function handleRegister() {
    if (!canSubmit) {
      if (password !== confirmPassword) {
        Alert.alert("Erro", "As senhas não coincidem!");
      }
      return;
    }

    setLoading(true);
    // Simulação
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);

    Alert.alert("Sucesso", "Conta criada!");
    router.back(); // Volta para a tela de login
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 16 }}>
          <View style={{ alignItems: "center", marginBottom: 32 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
              Criar Conta
            </Text>
          </View>

          <View style={{ gap: 16 }}>
            {/* Nome */}
            <View>
              <Text style={{ marginBottom: 8, fontSize: 16, color: "#555" }}>Nome</Text>
              <TextInput
                placeholder="Seu nome completo"
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: "#fff" }}
              />
            </View>

            {/* Email */}
            <View>
              <Text style={{ marginBottom: 8, fontSize: 16, color: "#555" }}>E-mail</Text>
              <TextInput
                placeholder="exemplo@gmail.com"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: "#fff" }}
              />
            </View>

            {/* Senha */}
            <View>
              <Text style={{ marginBottom: 8, fontSize: 16, color: "#555" }}>Senha</Text>
              <TextInput
                placeholder="********"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: "#fff" }}
              />
            </View>

            {/* Confirmar Senha */}
            <View>
              <Text style={{ marginBottom: 8, fontSize: 16, color: "#555" }}>Confirmar Senha</Text>
              <TextInput
                placeholder="********"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: "#fff" }}
              />
            </View>

            {/* Botão Cadastrar */}
            <TouchableOpacity
              onPress={handleRegister}
              disabled={!canSubmit}
              style={{
                backgroundColor: canSubmit ? "#211182" : "#ccc",
                padding: 16,
                borderRadius: 8,
                alignItems: "center",
                marginTop: 16,
              }}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Cadastrar</Text>
              )}
            </TouchableOpacity>

            {/* Link para Login */}
            <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 16, alignItems: "center" }}>
              <Text style={{ color: "#211182", fontSize: 16 }}>
                Já tem uma conta? <Text style={{ fontWeight: "bold" }}>Fazer login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}