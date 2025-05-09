// components/AppHeader.tsx
import { View, Text } from "react-native";
 // Your theme switch
import { useColorScheme } from "react-native";

export default function AppHeader() {
  const theme = useColorScheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: theme === "dark" ? "#f1f5f9" : "#1e293b",
        }}
      >
        Wellness Buddy
      </Text>
      
    </View>
  );
}
