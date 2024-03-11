import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import History from "../app/(tabs)/history";
import Home from "../app/(tabs)/home";
import Settings from "../app/(tabs)/settings";


export default function NavigationBar(){

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{tabBarIcon: "home"}} component={Home}  />
      <Tab.Screen name="History" options={{tabBarIcon: "history"}} component={History}  />
      <Tab.Screen name="Settings" options={{tabBarIcon: "cog"}} component={Settings}  />
    </Tab.Navigator>
  )
}