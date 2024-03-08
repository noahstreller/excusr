import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function NavigationBar(){
  return (
    <Tabs>
      <Tabs.Screen name="home/index" options={
        {
          title: "",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home" size={25} color={color} style={{marginBottom: -10}} />;
          }
        }
      }  />
      <Tabs.Screen name="history/index" options={
        {
          title: "",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="time" size={25} color={color} style={{marginBottom: -10}} />;
          }
        }
      }  />
      <Tabs.Screen name="settings/index" options={
        {
          title: "",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="settings" size={25} color={color} style={{marginBottom: -10}} />;
          }
        }
      }  />
    </Tabs>
  )
}