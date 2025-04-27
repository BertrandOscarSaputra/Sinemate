import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Search, TextInputCreate} from '../../components/molecules';
import {Gap} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const Live = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow at top */}
      <View style={styles.header}>
        <Search />
      </View>
      <Gap height={20} />

      {/* Centered Inputs */}
      <View style={styles.content}>
        <TextInputCreate
          label={'Room Code'}
          placeholder={'Enter room code...'}
        />
      </View>
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
    paddingTop: 40, // Status bar height + some margin
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    paddingHorizontal: 20,
  },
});
