// Redirecionar para o fluxo de autenticação ------

/*ROTA DE ENTRADA - Redireciona o user para
 o grupo (auth) assim que o app abre.*/ 

import { Redirect } from "expo-router";

export default function Index() {
  // Redireciona para a 1º tela dentro do grupo (auth)
  return <Redirect href="/(auth)" />;
}