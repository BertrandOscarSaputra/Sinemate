import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInputCreate} from '../../components/molecules';

const CreateRoom = () => {
  return (
    <View style={styles.container}>
      <TextInputCreate label={'Room Code'} placeholder={'Enter room code...'} />
    </View>
  );
};

export default CreateRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#000000', // light grey background
  },
});
