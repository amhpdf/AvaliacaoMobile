import { View, Text, StyleSheet } from "react-native";

const News = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>News content</Text>
    </View>
  )
}

export default News;

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