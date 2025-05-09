import { Stack } from "expo-router";
import "./global.css";
import Header from "./components/header";

export default function RootLayout() {
  return <Stack>
    
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }} />
  </Stack>;
}
