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
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen'








const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const HomeStackScreen = ({navigation}) =>(
<HomeStack.Navigator  
screenOptions = {{
      headerStyle:{
        backgroundColor:"#009387",
      },
      headerTintColor:"#fff",
      headerTitleStyle:"bold",
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen}  options={{
          title:"Overview",
          headerLeft:()=>(
            <Icon.Button name="menu" size={25}
            backgroundColor="#009387"
            onPress={()=>{navigation.openDrawer()}}> </Icon.Button>
            )
        }}/>
       
      </HomeStack.Navigator>
);

const DetailStackScreen = ({navigation}) =>(

  <DetailStack.Navigator  
  screenOptions = {{
        headerStyle:{
          backgroundColor:"#009387",
        },
        headerTintColor:"#fff",
        headerTitleStyle:"bold",
      }}>
          <DetailStack.Screen name="Details" component={DetailScreen}  options={{
            headerLeft:()=>(
            <Icon.Button name="menu" size={32}
            backgroundColor="#009387"
            onPress={()=>{navigation.openDrawer()}}> </Icon.Button>
            )
          }}/>
         
        </DetailStack.Navigator>
);
  


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer  >

<Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Detail" component={DetailStackScreen} />
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
