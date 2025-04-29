import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInputCreate = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        style={[styles.input, {fontSize: 16}]}
        placeholderTextColor="#8e8e93"
      />
    </View>
  );
};

export default TextInputCreate;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    paddingLeft: 14,
    paddingBottom: 10,
    marginBottom: 6,
    color: '#FFFFFF', 
  },
  input: {
    borderWidth: 1,
    width: 370,
    height: 60,
    borderColor: '#020202',
    borderRadius: 10,
    padding: 16,

    backgroundColor: '#1F1F1F', 
    color: '#FFFFFF',
  },
});
