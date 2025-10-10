import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";


export function Login() {
  const router = useRouter();

  //Infos de login pré-preenchidas (POR ENQUANTOOOO!!!)
  const [email, setEmail] = useState('aluno@teste.com');
  const [password, setPassword] = useState('123@senac');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Verifica se e-mail e senha estão não vazios
  const submit = email.trim() !== "" && password.trim() !== "" && !loading;

  async function handleSignIn() {
    try{
      setLoading(true);
      setLoginError('');
      // Criar simulação (sem back) pra validar com os dados acima
      /* Simula uma latência de rede (espera) de 600ms
      new Promise((r) => setTimeout(r, 600)) cria uma promessa que 
      resolve depois de 600ms; await pausa a função até passar este tempo*/
      await new Promise((r) => setTimeout(r, 600));

      if (email.toLowerCase() === "aluno@teste.com" && password === "123@senac") {
        Alert.alert('Login simulado com sucesso');
      }
      else{
        setLoginError('Email ou senhas inválidos');
      }
    }
    finally{
      setLoading(false);
    }

  }

  return (
    //Front
    <SafeAreaView>
      {/*Formulário*/}
      <View>
        {/*Email*/}
        <Text>E-mail</Text>
        <TextInput 
        placeholder="exemplo@email.com"
        >
        
        </TextInput>
      </View>

    </SafeAreaView>
  );

}
