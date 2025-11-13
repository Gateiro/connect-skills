import { AuthProvider } from "@/contexts/authContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

/*
========================================================================
                      MODO DE TESTE VISUAL
========================================================================
Este layout está modificado para pular a tela de login (auth) 
e ir direto para o grupo (tabs).

Isso permite testar o visual da Home e do Perfil sem precisar 
de um login real no Supabase.

Para voltar ao normal:
1. Apague o conteúdo da função "MainLayout" abaixo.
2. Descomente a função "MainLayout_ORIGINAL" e a renomeie para "MainLayout".
========================================================================
*/

/*Redicionamento automático de acordo com a sessão*/
function MainLayout() {
  const router = useRouter();
  
  // Efeito para forçar o app a abrir nas (tabs)
  useEffect(() => {
    console.log("MODO DE TESTE: Redirecionando para (tabs)");
    router.replace("./(tabs)");
  }, []); // Executa apenas uma vez

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/*Grupos existentes no aplicativo */}
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)"/> {/* Garantindo que (tabs) esteja ativa */}
    </Stack>
  );
}


/*
========================================================================
                      LAYOUT ORIGINAL (COMENTADO)
========================================================================

function MainLayout_ORIGINAL() {
  const router = useRouter();
  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuth({ user: session?.user ?? null, session: session ?? null });
      if (session?.user) {
        // ROTA LOGADA: direcionar para (tabs)
        router.replace("./(tabs)");
      }
      else {
        router.replace("./(auth)/index");
      }
    });

    //Monitorar a mudança de sessão => por exemplo: quando loga, quando faz logout
    const { data: sup } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuth({ user: session?.user ?? null, session: session ?? null });
      if (session?.user) {
        router.replace("./(tabs)");
      }
      else {
        router.replace("./(auth)/index");
      }
    });
    return () => {
      sup.subscription.unsubscribe();
    };
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
*/


// O Provedor de Contexto continua o mesmo
export default function Root() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}