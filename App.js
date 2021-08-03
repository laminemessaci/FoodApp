/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Home Screen </Text>
      <Button
        title=" Go to Detail Screen"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
};

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Detail Screen </Text>
      <Button
        title=" Go to Detail Screen ...again"
        onPress={() => {
          navigation.push('Details');
        }}
      />
      <Button
        title=" Go to Home Screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title=" Go to Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title=" Go to the first Screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        {/* 
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
