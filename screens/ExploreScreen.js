/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Button } from 'react-native'

// eslint-disable-next-line no-undef
export default  ExploreScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Home Screen </Text>
        <Button
          title=" Go to Detail Screen"
          onPress={() => {
            navigation.navigate("Detail");
          }}
        />
      </View>
    );
  };
  
