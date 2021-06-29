import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, View } from 'react-native';

function App() {
     return( 
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{
     headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Spacefrafts" component={SpaceCraftsScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/> 
      <Stack.Screen name="StarMap" component={StarMapScreen}/> 
      </Stack.Navigator> 
      </NavigationContainer>
     ); 
}