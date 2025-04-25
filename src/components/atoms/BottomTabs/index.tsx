import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Live from '../../../pages/Live'; // Your Live screen
import Profile from '../../../pages/Profile'; // Your Profile screen
import Room from '../../../pages/Room';
import {
  MiddlePoint,
  LiveIcon,
  LiveIconIn,
  ProfileIcon,
  ProfileIconIn,
} from '../../../assets/';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false, // Hide header for tab screens
        tabBarStyle: {
          backgroundColor: '#353535', // Tab bar background color
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 14, // Font size for the labels
          fontWeight: 'bold', // Make label text bold
        },
        tabBarActiveTintColor: '#B49C5D', // Color when tab is active
        tabBarInactiveTintColor: 'white', // Color when tab is inactive
      })}>
      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          tabBarLabel: 'Live',
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <LiveIcon style={styles.icon} />
              ) : (
                <LiveIconIn style={styles.icon} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Room"
        component={Room}
        options={{
          tabBarLabel: '', // Hide label to make room for the button
          tabBarIcon: ({focused}) => (
            <View style={[styles.circleButton, focused && styles.activeCircle]}>
              <MiddlePoint style={styles.icon} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <ProfileIconIn style={styles.icon} />
              ) : (
                <ProfileIcon style={styles.icon} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#B49C5D', // You can use any color or even gradient
    justifyContent: 'center',
    alignItems: 'center',
    top: -20, // Push it upward to make it look like it floats
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  activeCircle: {
    backgroundColor: '#D6BA74',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
