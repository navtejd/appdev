// stackNav.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Explore from '../app/(tabs)/explore';  // Import your explore page
import VegetablesPage from '../app/vegetables';  // Import the Vegetables/Fruits page
import DailyEssentials from '../app/dailyessentials';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="VegetablesPage" component={VegetablesPage} />
        <Stack.Screen name="Daily Essentials" component={DailyEssentials} />
      </Stack.Navigator>
  );
};

export default StackNav;
