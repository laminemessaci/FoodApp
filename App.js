/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer  >

<Drawer.Navigator drawerContent = {props=> <DrawerContent {...props}  /> }>
      <Drawer.Screen name="Home" component={MainTabScreen} />
      {/* <Drawer.Screen name="Detail" component={DetailStackScreen} /> */}
    </Drawer.Navigator>
     
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
