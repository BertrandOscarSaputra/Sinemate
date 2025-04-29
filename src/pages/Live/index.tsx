import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Search} from '../../components/molecules';
import {Gap} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const Live = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Search />
      </View>
      <Gap height={20} />
      <View style={styles.content}></View>
    </ScrollView>
  );
};

export default Live;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingTop: 40, 
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    paddingHorizontal: 20,
  },
});
