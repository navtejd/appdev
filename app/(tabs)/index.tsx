// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleNavigation = (section: string) => {
    if (section === 'Explore Items') {
      router.push('/explore');  // Navigate to the 'explore' page
    } else if (section === 'Go to Cart') {
      router.push('/cart');  // Navigate to the 'cart' page
    } else {
      console.log(`${section} clicked`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation('Explore Items')}>
          <Text style={styles.navButtonText}>Explore Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation('Go to Cart')}>
          <Text style={styles.navButtonText}>Go to Cart</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.welcomeText}>Welcome to the Grocery App</Text>

      <TouchableOpacity style={styles.startButton} onPress={() => console.log('Start Shopping Clicked')}>
        <Text style={styles.buttonText}>Start Shopping</Text>
      </TouchableOpacity>
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
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 80,
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
