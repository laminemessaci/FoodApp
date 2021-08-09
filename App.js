/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useMemo, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookMarkScreen from './screens/BookMarkScreen';
import { RootStackScreen } from './screens/RootStackScreen';
import { AuthContext } from './components/context';






const Drawer = createDrawerNavigator();

export default function App() {
const [isLoading, setIsLoading] = React.useState(true);
const [userToken, setUserToken] = React.useState(null);

const authContext = useMemo(()=>({
  singIn:()=>{
    setUserToken("blabla");
    setIsLoading(false);
  },
  signOut:()=>{
    setUserToken(null);
    setIsLoading(false);
  },
  singUp:()=>{
    setUserToken("blabla");
    setIsLoading(false);
  },

  
}))

useEffect(() => {
  console.log(authContext.singIn)
  setTimeout(()=>{
    setIsLoading(false)
  }, 1000)
 
}, [])

if( isLoading ) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  );
}

  return (
    <AuthContext.Provider value={authContext} >

    <NavigationContainer  >
    {userToken !== null ? (
      <Drawer.Navigator drawerContent = {props=> <DrawerContent {...props}  /> }>
      <Drawer.Screen name="Home" component={MainTabScreen} />
      <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="BookmarkScreen" component={BookMarkScreen} />
    </Drawer.Navigator>
    ) : (
      <RootStackScreen  headerMode= "none"/>
    ) }


     
    </NavigationContainer>
    </AuthContext.Provider>
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
