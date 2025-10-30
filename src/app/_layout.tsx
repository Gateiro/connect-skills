// Define a navegação por Abas para as telas logadas (Home, Perfil, etc.).

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho
        tabBarActiveTintColor: "#211182", 
        tabBarInactiveTintColor: "#9ca3af", 
        tabBarStyle: {
          backgroundColor: "#ffffff", 
          borderTopWidth: 0.5, 
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home", // Título da aba
          tabBarIcon: ({ color, size }) => ( 
            <Ionicons name="home-outline" color={color} size={size} /> 
          ),
        }}
      />
      
      {/* (Quando criar a tela de Perfil, adicionar aqui)
        <Tabs.Screen
          name="profile" 
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        /> 
      */}
    </Tabs>
  );
}