import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AppHeader from "../components/header";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        header: () => <AppHeader />, // Custom header on all tabs
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Dashboard",
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          headerShown: false,
          tabBarLabel: "Schedule",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
        }}
      />
      <Tabs.Screen
        name="alert"
        options={{
          headerShown: false,
          tabBarLabel: "Alert",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
