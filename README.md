# Connect-Skills 🚀

O Connect-Skills é um app mobile que está sendo desenvolvido no curso Técnico em Desenvolvimento de Sistemas. O objetivo é criar uma plataforma onde os usuários possam se conectar para **aprender** novas habilidades e **ensinar** o que já sabem, criando uma comunidade de troca de conhecimentos.

## 🛠️ Tecnologias Usadas

Este projeto é construído com:

* **Expo (SDK 54)**: Plataforma para desenvolvimento universal de apps React.
* **React Native**: Framework para construir apps nativos usando React.
* **TypeScript**: Para adicionar tipagem estática e deixar o JavaScript mais robusto.
* **Expo Router (v6)**: Usado para controlar a navegação e a estrutura de rotas baseada em pastas.

## 🚀 Como Rodar o Projeto

Para rodar este projeto na sua máquina, siga estes passos:

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [Git](https://git-scm.com/)
* (Opcional mas recomendado) App **Expo Go** no seu celular (iOS ou Android).
* (Opcional) [VS Code](https://code.visualstudio.com/) com a extensão [Expo Tools](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools).

### Passos de Instalação

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    git clone <url-do-seu-repositorio>
    cd connect-skills
    ```

2.  **Instale as dependências principais (do `package.json`):**
    ```bash
    npm install
    ```

3.  **Instale a dependência específica da Home (o "Swiper"):**
    ```bash
    npm i react-native-deck-swiper
    ```

4.  **Inicie o servidor de desenvolvimento do Expo:**
    ```bash
    npx expo start
    ```

5.  **Abra o app:**
    * **No Celular:** Leia o QR Code que apareceu no terminal usando o app Expo Go.
    * **No Emulador:** Aperte `a` (para Android) ou `i` (para iOS) no terminal.

## 🏗️ Arquitetura de Navegação

O app usa a navegação por "grupos" (Layout Groups) do `expo-router`. Isso significa que a estrutura de pastas dentro de `src/app` define como as telas funcionam.

### 1. Layout Raiz (`/app/_layout.tsx`)

O layout principal é "neutro" e usa o componente `<Slot />`. Ele não define um tipo de navegação (como Pilha ou Abas) e deixa essa responsabilidade para os grupos de rotas.

### 2. Grupo de Autenticação: `(auth)`

* **Localização**: `src/app/(auth)`
* **Navegador**: `Stack` (Navegação em pilha).
* **Telas**:
    * `login.tsx`: Tela de Login do usuário.
    * `register.tsx`: Tela de Cadastro de novos usuários.

### 3. Grupo Principal: `(tabs)`

* **Localização**: `src/app/(tabs)`
* **Navegador**: `Tabs` (Navegação por abas na parte de baixo da tela).
* **Telas**:
    * `home.tsx`: Tela principal onde os usuários podem encontrar "matches" de habilidades.
    * *(Futuro: `profile.tsx`)*: Tela de perfil do usuário.

## ✨ Funcionalidades Atuais (Front-End)

* **Simulação de Login e Cadastro**: As telas de `(auth)` têm formulários funcionais com lógica de estado (usando `useState`) e uma simulação de login.
* **Navegação Completa**: O usuário pode navegar entre o fluxo de `(auth)` (Pilha) e o fluxo de `(tabs)` (Abas).
* **Swiper de Cards na Home**: A tela Home usa o `react-native-deck-swiper` para mostrar cards de usuários. O usuário pode deslizar para a direita ("match") ou esquerda ("rejeitar").

O projeto está com a estrutura pronta para a próxima etapa: a integração com o **Supabase** para cuidar do backend e da autenticação real.