import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { LoginSecondScreen } from './screens/login_2';
import { LoginStartScreen } from './screens/login_1';
import { Navigation } from './screens/navigation';

export default function App() {
  return (
      <Navigation/>
  );
}
