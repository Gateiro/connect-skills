import { AuthProvider, useAuth } from "@/contexts/authContext";
import { supabase } from "@/lib/supabase";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

/*Redicionamento automático de acordo com a sessão*/
function MainLayout() {
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
      {/*SplashScreen: carregamento dos dados enquanto se decide a rota */}

      {/*Grupos existentes no aplicativo */}
      <Stack.Screen name="(auth)" />
      {/* <Stack.Screen name="(tabs)"/> */}
    </Stack>
  );
}

export default function Root() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}