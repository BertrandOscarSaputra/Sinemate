import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import LogInSignUp from './src/pages/LogInSignUp';
import LogIn from './src/pages/LogIn';
import SignUp from './src/pages/SignUp';
import CreateRoom from './src/pages/CreateRoom';
import JoinRoom from './src/pages/JoinRoom';
import LiveRoom from './src/pages/LiveRoom';
import SearchPage from './src/pages/SearchPage';
import Live from './src/pages/Live';
import Middle from './src/pages/Middle';
import Profile from './src/pages/Profile';
import FlashMessage from 'react-native-flash-message';
import BottomTabs from './src/components/atoms/BottomTabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
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
          name="Live"
          component={Live}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Middle"
          component={Middle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
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
          name="LiveRoom"
          component={LiveRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
