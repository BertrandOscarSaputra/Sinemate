import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/Arrow.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    padding: 16,
    backgroundColor: '#000000',
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginBottom:50,
=======
    padding: 20,
    backgroundColor: '#000000',
  },
  title: {
    color: '#fff',
    marginLeft: 60,
    paddingTop: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
>>>>>>> 5147f11123e52c0a0dfbd919e8a342860579ffe2
  },
});

export default CustomHeader;
