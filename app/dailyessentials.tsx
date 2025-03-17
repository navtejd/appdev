import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useCart } from '../contexts/cartcontexts';

const essentials = [
  { id: 11, name: 'Rice', price: 60, stock: 20 },
  { id: 12, name: 'Wheat Flour', price: 50, stock: 15 },
  { id: 13, name: 'Sugar', price: 40, stock: 30 },
  { id: 14, name: 'Salt', price: 20, stock: 50 },
  { id: 15, name: 'Milk', price: 50, stock: 10 },
  { id: 16, name: 'Eggs', price: 70, stock: 25 },
  { id: 17, name: 'Cooking Oil', price: 120, stock: 18 },
  { id: 18, name: 'Tea', price: 90, stock: 12 },
  { id: 19, name: 'Coffee', price: 150, stock: 8 },
  { id: 20, name: 'Lentils', price: 80, stock: 22 },
];

export default function Essentials() {
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
      <Text style={styles.title}>Essentials</Text>

      <ScrollView style={styles.itemsContainer}>
        {essentials.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹{item.price}</Text>
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
  itemStock: { fontSize: 14, color: 'black', marginTop: 5 },
  addButton: { marginTop: 10, backgroundColor: 'red', paddingVertical: 8, borderRadius: 10, alignItems: 'center' },
  addButtonText: { fontSize: 16, color: 'white', fontWeight: 'bold' },
});
