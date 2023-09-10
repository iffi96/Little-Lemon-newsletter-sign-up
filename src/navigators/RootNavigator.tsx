import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Subscribe from '../screens/Subscribe';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
