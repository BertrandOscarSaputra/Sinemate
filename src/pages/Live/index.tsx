import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MiddlePoint} from '../../components/atoms';

const Live = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Live</Text>
    </View>
  );
};

export default Live;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
  },
});
