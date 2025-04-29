import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {ButtonS, Gap} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {ButtonL } from '../../components/atoms';

const Middle = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ButtonL onPress={() => navigation.navigate('CreateRoom')}>
      </ButtonL>
      <Text style={styles.tex}>Watch Youtube</Text>
      
      <Gap height={40} />
      <ButtonS onPress={() => navigation.navigate('JoinRoom')}>
      </ButtonS>
      <Text style={styles.tex}>join Room</Text>
    </View>
  );
};

export default Middle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  tex:{
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',

  }
});
