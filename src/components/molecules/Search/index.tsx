import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Sinemate, Glass} from '../../../assets';

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Sinemate />
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
          <Glass />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#000000',
  },
  left: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
});

export default Search;
