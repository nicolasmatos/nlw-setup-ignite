import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components/Header";
import { SummaryTable } from "../components/SummaryTable";

export function Home() {
  const { navigate } = useNavigation()

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <SummaryTable />
    </View>
  )
}
