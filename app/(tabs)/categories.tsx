import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Categories() {
  const categories = [
    {
      id: "1",
      title: "Salads",
      description: "Dish that typically consists of a mix of various ingredients",
      price: "$120",
      productName: "Powers Salads",
      image: "", 
    },
    {
      id: "2",
      title: "Cereals",
      description: "This cereal is made from high-quality whole grains that are rich",
      price: "$120",
      productName: "Premium Cereals",
      image: "", 
    },
    {
      id: "3",
      title: "Milks",
      description: "Enjoy the deliciousness and health benefits of our fresh milk!",
      price: "$120",
      productName: "Fresh Milks",
      image: "", 
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Category</Text>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.address}>123 Alm Street, USA ▼</Text>
      <Text style={styles.welcome}>Welcome Back Alex</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <TouchableOpacity style={styles.checkNowButton}>
                <Text style={styles.checkNowText}>Check Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardImageContainer}>
              <Image
                source={{ uri: item.image || "https://via.placeholder.com/80" }}
                style={styles.cardImage}
              />
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
  },
  welcome: {
    fontSize: 14,
    color: "gray",
    marginBottom: 15,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#000",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 15,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  cardDescription: {
    fontSize: 14,
    color: "#d3d3d3",
    marginBottom: 10,
  },
  checkNowButton: {
    backgroundColor: "green",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  checkNowText: {
    color: "#fff",
    fontSize: 14,
  },
  cardImageContainer: {
    alignItems: "flex-end",
  },
  cardImage: {
    width: 80,
    height: 80,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  productName: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});
