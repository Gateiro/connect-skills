/* -- LAYOUT DO GRUPO --
Definir a navegação em pilha (Stack) */

import { Stack } from "expo-router";


export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false, 
            }}
        >
            {/* -- Telas dentro da pilha -- */}
            <Stack.Screen name="index" options={{title: "Entrar"}} />
            <Stack.Screen name="register" options={{title: "Cadastro"}} />
        </Stack>
    );
}