import React from 'react';
import { Slot } from 'expo-router';
import { CartProvider } from '../contexts/cartcontexts'; 

export default function RootLayout() {
  return (
    <CartProvider> 
      <Slot /> 
    </CartProvider>
  );
}
