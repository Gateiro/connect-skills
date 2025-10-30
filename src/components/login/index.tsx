// Componente de UI - lógica e o visual da tela de Login 

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
// Importar estilos *********

export function Login() {
  const router = useRouter();

  // Infos de login pré-preenchidas (por enquanto!)
  const [email, setEmail] = useState("aluno@teste.com");
  const [password, setPassword] = useState("123@senac");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Verifica se email e senha estão preenchidos
  const canSubmit = email.trim() !== "" && password.trim() !== "" && !loading;

  const handleSignIn = async () => {
    try {
      setLoading(true);
      setLoginError("");

      // Simulação (sem back-end)
      await new Promise((r) => setTimeout(r, 600));

      if (email.toLowerCase() === "aluno@teste.com" && password === "123@senac") {
        Alert.alert("Login simulado com sucesso!");
        // Quando o login for real, usaremos router.replace para ir para as (tabs)
        // router.replace('/(tabs)/home');
      } else {
        setLoginError("E-mail ou senha inválidos!");
      }
    } finally {
      setLoading(false);
    }
  };

  function handleGoToRegister() {
    router.push("/(auth)/register"); // Navega para a tela de cadastro
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // [cite: 125]
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 16 }}>
          <View style={{ alignItems: "center", marginBottom: 32 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
              Connect-Skills
            </Text>
          </View>

          {/* Formulário */}
          <View style={{ gap: 16 }}>
            {/* Email */}
            <View>
              <Text style={{ marginBottom: 8, fontSize: 16, color: "#555" }}>E-mail</Text>
              <TextInput
                placeholder="exemplo@gmail.com"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address" 
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  padding: 12,
                  fontSize: 16,
                  backgroundColor: "#fff",
                }}
              />
            </View>

            {/* Senha */}
            <View>
              <Text style={{ marginBottom: 8, fontSize: 16, color: "#555" }}>Senha</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#fff",
                }}
              >
                <TextInput
                  placeholder="********"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  style={{
                    flex: 1,
                    padding: 12,
                    fontSize: 16,
                  }}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ padding: 12 }}>
                  {/* ( adicionar um ícone ) */}
                  <Text>{showPassword ? "Ocultar" : "Mostrar"}</Text>
                </TouchableOpacity>
              </View>
              {loginError ? <Text style={{ color: "red", marginTop: 8 }}>{loginError}</Text> : null}
            </View>

            {/* Botão Entrar */}
            <TouchableOpacity
              onPress={handleSignIn}
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
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Entrar</Text>
              )}
            </TouchableOpacity>

            {/* Link para Cadastro */}
            <TouchableOpacity onPress={handleGoToRegister} style={{ marginTop: 16, alignItems: "center" }}>
              <Text style={{ color: "#211182", fontSize: 16 }}>
                Não tem uma conta? <Text style={{ fontWeight: "bold" }}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}