import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useCart } from '../contexts/cartcontexts';

const items = [
  { id: 1, name: 'Tomatoes', price: 30, stock: 10 },
  { id: 2, name: 'Bananas', price: 50, stock: 15 },
  { id: 3, name: 'Potatoes', price: 20, stock: 20 },
  { id: 4, name: 'Apples', price: 100, stock: 12 },
  { id: 5, name: 'Carrots', price: 40, stock: 18 },
  { id: 6, name: 'Onions', price: 25, stock: 25 },
  { id: 7, name: 'Oranges', price: 80, stock: 10 },
  { id: 8, name: 'Spinach', price: 35, stock: 8 },
  { id: 9, name: 'Mangoes', price: 120, stock: 6 },
  { id: 10, name: 'Cucumbers', price: 30, stock: 14 },
];

export default function Vegetables() {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Link href="/cart" style={styles.navButton}>
          <Text style={styles.navButtonText}>Go to Cart</Text>
        </Link>
      </View>

      {/* Content Section */}
      <Text style={styles.title}>Vegetables & Fruits</Text>

      <ScrollView style={styles.itemsContainer}>
        {items.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹{item.price} per kg</Text>
            <Text style={styles.itemStock}>Stock: {item.stock}</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToCart({ id: item.id, name: item.name, price: item.price, stock: item.stock, quantity: 1 })}
            >
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'green', paddingTop: 50, paddingHorizontal: 20 },
  navBar: { flexDirection: 'row', backgroundColor: 'red', paddingVertical: 10, justifyContent: 'center' },
  navButton: { paddingVertical: 5, paddingHorizontal: 10 },
  navButtonText: { color: 'white', fontWeight: 'bold' },
  title: { fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 20 },
  itemsContainer: { marginTop: 20 },
  item: { backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 10 },
  itemName: { fontSize: 20, fontWeight: 'bold' },
  itemPrice: { fontSize: 16, color: 'gray' },
  itemStock: { fontSize: 14, color: 'red' },
  addButton: { marginTop: 10, backgroundColor: 'red', paddingVertical: 8, borderRadius: 10, alignItems: 'center' },
  addButtonText: { fontSize: 16, color: 'white', fontWeight: 'bold' },
});
