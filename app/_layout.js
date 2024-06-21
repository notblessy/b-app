import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Special04: require("../assets/special04.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="address-card" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
