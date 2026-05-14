import { StyleSheet, Text, View } from "react-native";
import { colors, globalStyles } from "../../global";
export default function HomeHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <View style={globalStyles.header}>
      <Text style={styles.date}>{currentDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: 30,
  },
});
