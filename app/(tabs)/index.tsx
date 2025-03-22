import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/explore');
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/basket.png')} style={styles.logo} />
      <Text style={styles.title}>Easy Marts</Text>
      <Text style={styles.subtitle}>All Your Needs, at Your Fingertips</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7BA35A', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100, 
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
});
