import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Import Link component

export default function Explore() {
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Link href="/explore" style={styles.navButton}>
          <Text style={styles.navButtonText}>Check out Our Items</Text>
        </Link>
        <Link href="/cart" style={styles.navButton}>
          <Text style={styles.navButtonText}>Add To Your Cart</Text>
        </Link>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Payment</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Choose a Section</Text>

      <View style={styles.sectionButtonsContainer}>
        {/* Section Buttons */}
        <Link href="/vegetables" style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>Vegetables / Fruits</Text>
        </Link>
        <Link href="/dailyessentials" style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>Daily Essentials</Text>
        </Link>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>Miscellaneous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    justifyContent: 'space-around',
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  sectionButtonsContainer: {
    width: '80%',
    alignItems: 'center',
  },
  sectionButton: {
    backgroundColor: 'red',
    paddingVertical: 25,
    paddingHorizontal: 60,
    marginBottom: 20,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  sectionButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

