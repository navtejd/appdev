import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useCart } from '../contexts/cartcontexts'; // Import Cart Context

export default function Cart() {
  const { cartItems, totalPrice } = useCart(); // Get dynamic cart data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <ScrollView style={styles.cartItemsContainer}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>Price: ₹{item.price}</Text>
              <Text style={styles.itemDetails}>Quantity: {item.quantity}</Text>
              <Text style={styles.itemDetails}>Total: ₹{item.price * item.quantity}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCart}>Your cart is empty.</Text>
        )}
      </ScrollView>

      <Text style={styles.total}>Total Price: ₹{totalPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  cartItemsContainer: {
    marginBottom: 30,
  },
  cartItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 16,
    color: 'gray',
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  emptyCart: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
});
