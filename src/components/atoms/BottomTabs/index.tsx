import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Live from '../../../pages/Live'; 
import Profile from '../../../pages/Profile'; 
import Middle from '../../../pages/Middle';
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
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#353535', 
        },
        tabBarLabelStyle: {
          fontSize: 14, 
          fontWeight: 'bold', 
        },
        tabBarActiveTintColor: '#B49C5D', 
        tabBarInactiveTintColor: 'white', 
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
        name="Middle"
        component={Middle}
        options={{
          tabBarLabel: '', 
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
    backgroundColor: '#B49C5D', 
    justifyContent: 'center',
    alignItems: 'center',
    top: -20, 
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
