import { View, Text, StyleSheet } from "react-native";

const Agreements = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agreements content</Text>
    </View>
  )
}

export default Agreements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  }
})