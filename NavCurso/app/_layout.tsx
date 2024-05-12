import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sobre" options={{ headerShown: false }} />
      <Stack.Screen name="curso" options={{ headerShown: false }} />
      <Stack.Screen name="instituicao" options={{ headerShown: false }} />
    </Stack>
  );
}
