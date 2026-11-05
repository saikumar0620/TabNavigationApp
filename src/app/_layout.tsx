import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import react from "react";
export default function RootLayout() {
  return (
    <>
        <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
