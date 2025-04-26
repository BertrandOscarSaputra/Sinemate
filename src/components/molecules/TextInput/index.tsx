import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Input
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#8e8e93"
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
    color: '#000', // make sure label text is visible
  },
  input: {
    borderColor: '#020202',
    borderWidth: 1, // you need this for the border to appear
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff', // white input background
    color: '#000', // black text
  },
});
