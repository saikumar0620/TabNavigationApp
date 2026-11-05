import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{
      tabBarLabelPosition: "below-icon",
      tabBarStyle: { backgroundColor: "papayawhip" },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      headerTitle: "Tab Navigation App",
      headerTintColor: "tomato",
      headerStyle: { backgroundColor: "papayawhip" }
      
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          tabBarBadge: "3",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
