import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {MiddlePoint} from '../../../assets/';
import {useNavigation} from '@react-navigation/native';

const Middle = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.middlePoint} onPress={onPress}>
      <MiddlePoint />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  middlePoint: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 1, // Adjust to float above tab bar
    alignSelf: 'center',
    zIndex: 999,
    elevation: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Middle;
