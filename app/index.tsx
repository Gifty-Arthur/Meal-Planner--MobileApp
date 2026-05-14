import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View>
      <Text>Wellcome to Meal Planne</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
