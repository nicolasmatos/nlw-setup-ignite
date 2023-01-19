import { View, Text, ScrollView } from "react-native";

import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates'

import { HabitDay, daySize } from "../components/HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateRangeDatesFromYearStart()
const minimumSummaryDatesSize = 18 * 5 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((weekDay, i) => (
            <Text
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: daySize }}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>
      <View className="flex-row flex-wrap">
        {
          summaryDates.map(date => (
            <HabitDay
              key={date.toISOString()}
            />
          ))
        }
        {
        amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => (
          <View
            key={i}
            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
            style={{ width: daySize, height: daySize }}
          />
        ))
      }
      </View>
    </ScrollView>
  )
}
