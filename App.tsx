import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import LogInSignUp from './src/pages/LogInSignUp';
import LogIn from './src/pages/LogIn';
import SignUp from './src/pages/SignUp';
import CreateRoom from './src/pages/CreateRoom';
import JoinRoom from './src/pages/JoinRoom';
import Room from './src/pages/Room';
import SearchPage from './src/pages/SearchPage';

import BottomTabs from './src/components/atoms/BottomTabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogInSignUp"
          component={LogInSignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JoinRoom"
          component={JoinRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Room"
          component={Room}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
