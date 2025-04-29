
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Button = ({color = '#000000', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Image source={require('../../../assets/Door.png')} style= {styles.yt}/>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
button: (color: string): ViewStyle => ({
  backgroundColor: color,
  borderColor: '#B49C5D',
  borderWidth: 4,
  borderRadius: 100,
  padding: 5,
  height: 150,
  width: 150,
  marginBottom: 10,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}),
yt: {
  height: 80,
  width: 80,
},
});