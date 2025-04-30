import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Arrow} from '../../../assets';
import AccountProfile from '../AccountProfile';

const BackArrowLive = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Arrow />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <AccountProfile imageSize={30} fontSize={17} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000',
  },
  title: {
    color: '#fff',
    marginLeft: 35,
    marginRight: 30,
    marginTop: 15,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
});

export default BackArrowLive;
