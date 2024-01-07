import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoginStartScreen } from './login_1';
import { LoginSecondScreen } from './login_2';
import { HomeScreen } from './HomeScreen';
import { AdressScreen } from './AdressScreen';

const Stack = createNativeStackNavigator();

const adress = 'ул. Байкальская, 45'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginStartScreen" component={LoginStartScreen} options={{
            headerBackTitleVisible: false,
            title: ' ',
            headerTransparent: true
            }}/>
        <Stack.Screen name="LoginSecondScreen" component={LoginSecondScreen} options={{
            headerBackTitleVisible: false,
            title: ' ',
            headerTransparent: true,
            headerTintColor: 'black'
            }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
            headerShown: false,
            }}/>
        <Stack.Screen name="AdressScreen" component={AdressScreen} options={{
            headerBackTitleVisible: false,
            title: 'Ваш адрес',
            headerTransparent: true,
            headerTintColor: 'black'
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};