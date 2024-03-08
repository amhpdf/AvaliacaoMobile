import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home content</Text>
    </View>
  )
}

export default Home;

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