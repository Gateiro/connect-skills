/*

Stack: container de navegação 
(baseado no empilhamento de telas) => 
push/replace/back

1- router.push("/rota") => Empilha uma nova tela por cima da atual => usuário navega para
a próxima tela, mas ainda pode voltar para a anterior.

2- router.replace("/rota") => Substitui a tela atual, sem empilhar => quando você não quer 
permitir voltar, como após o login (após se autenticar!!)

3- router.back() => Remove o topo da pilha (volta uma tela) => quando o usuário clica em "voltar"

*/

import { Stack } from "expo-router";

export default function RootLayout() {

  return <Stack />;
  
}
