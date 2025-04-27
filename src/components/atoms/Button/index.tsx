import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = '#2c2c2c', textColor = '#fff', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 8,
    paddingVertical: 10,
    height: 50,
    width: 280,
    marginBottom: 38,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: '600',
    color: textColor,
  }),
});
