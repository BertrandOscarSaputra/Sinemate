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
    marginBottom: 36,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
    color: '#8E8E8E', // make sure label text is visible
  },
  input: {
    borderColor: '#020202',
    borderWidth: 10, // you need this for the border to appear
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#1F1F1F', // white input background
    color: '#000', // black text
  },
});
