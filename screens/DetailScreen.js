/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button} from 'react-native';

export default  DetailScreen = ({navigation}) => {
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