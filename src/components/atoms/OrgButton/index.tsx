import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const OrgButton = ({label, color = '#9B3922', textColor = '#fff', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default OrgButton;

const styles = StyleSheet.create({
  button: color => ({
    alignItems: 'center',
    backgroundColor: color,
    paddingVertical: 6,
    marginBottom: 38,
    borderRadius: 30,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    color: textColor,
  }),
});
