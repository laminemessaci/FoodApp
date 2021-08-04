/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExploreScreen from './ExploreScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();


export default  MainTabScreen = ()=> {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: "#009387",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />

<Tab.Screen
            name="Notification"
            component={DetailStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: "#a29880",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />



        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarColor: "#02f568",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="refresh" color={color} size={26} />
              ),
            }}
          />



        </Tab.Navigator>
      );
}



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
              backgroundColor:"#a29880",
            },
            headerTintColor:"#fff",
            headerTitleStyle:"bold",
          }}>
              <DetailStack.Screen name="Details" component={DetailScreen}  options={{
                headerLeft:()=>(
                <Icon.Button name="menu" size={32}
                backgroundColor="#a29880"
                onPress={()=>{navigation.openDrawer()}}> </Icon.Button>
                )
              }}/>

            </DetailStack.Navigator>
    );


