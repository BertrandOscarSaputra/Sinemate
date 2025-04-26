import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Arrow} from '../../../assets';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Arrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: '1',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    padding: 16,
    backgroundColor: '#000000',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    color:'white',
  },
});

export default CustomHeader;
