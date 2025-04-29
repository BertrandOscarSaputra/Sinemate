import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const AccountProfile = ({imageSize = 48, fontSize = 18}) => {
  return (
    <View style={[styles.container, {padding: imageSize * 0.2}]}>
      <Image
        source={require('../../../assets/null-photo.png')} 
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2,
          marginRight: imageSize * 0.25,
        }}
      />
      <Text style={[styles.name, {fontSize}]}>{'Rackel James'}</Text>
    </View>
  );
};

export default AccountProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 8,
  },
  name: {
    color: '#D6C189',
    fontWeight: '600',
  },
});
