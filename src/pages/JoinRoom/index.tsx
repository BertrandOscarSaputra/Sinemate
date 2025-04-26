import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from '../../components/molecules';

const JoinRoom = () => {
  return (
    <View>
      <TextInput label="Room ID" placeholder="Enter Room ID" />
    </View>
  );
};

export default JoinRoom;

const styles = StyleSheet.create({});
