import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/auth/Login"
import Register from "../screens/auth/Register"

const Stack = createStackNavigator();

export default function Auth({navigation}) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
    </Stack.Navigator>
    
  );
}

