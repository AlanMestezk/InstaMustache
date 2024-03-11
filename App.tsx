import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './src/components/Header';
import { Feed } from './src/components/Feed';
import { GlobalStyles } from './src/style/GlobalStyles';


export default function App() {
  return (
    <View style={GlobalStyles.container}>
      <Header />
      <Feed />
      
  
    </View>
  );
}