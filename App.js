import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DeliveryScreen from './screens/DeliveryScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
              name="Delivery" 
              component={DeliveryScreen}
              options={{presentation: "fullScreenModal" ,headerShown: false}}/>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}