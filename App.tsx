import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './Components/Homepagedesign/BottomTab';
import Login from './Components/Others/Login';
import Register from './Components/Others/Register';
import Lang from './Components/Others/Lang';
import Ourteams from './Components/Ourteams/Ourteams';
import Contact from './Components/Others/Contact';
import Downloads from './Components/Others/Downloads';
import Profile from'./Components/Homepagedesign/Profile';
import Notification from './Components/Homepagedesign/Notification';





type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Lang: undefined;
  Ourteams: undefined;
  Contact: undefined;
  Downloads: undefined;
  profile: undefined;
  Notification: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor='#690c23' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
       
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Lang' component={Lang} />
          <Stack.Screen name='Ourteams' component={Ourteams} />
          <Stack.Screen name='Contact' component={Contact} />
          <Stack.Screen name='Downloads' component={Downloads} />
          <Stack.Screen name='Home' component={BottomTabNavigator} />
          <Stack.Screen name='profile' component={Profile} />
          <Stack.Screen name='Notification' component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#690c23',
  },
});

export default App;
