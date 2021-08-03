/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text } from 'react-native'

export default  HomeScreen = ({navigation}) => {
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
  
  
