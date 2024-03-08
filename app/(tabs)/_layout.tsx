import { StatusBar } from 'expo-status-bar';
import NavigationBar from "../../components/navbar";

export default function Layout(){
  return (
    <>
      <StatusBar style="auto" />
      <NavigationBar />
    </>
  )
}