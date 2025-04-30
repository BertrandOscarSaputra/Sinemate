import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const AccountProfile = ({
  imageSize = 48,
  fontSize = 18,
  backgroundColor = '#1c1c1c',
  name = 'Rackel James', // Default fallback
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          padding: imageSize * 0.2,
          backgroundColor,
        },
      ]}>
      <Image
        source={require('../../../assets/null-photo.png')}
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2,
          marginRight: imageSize * 0.25,
        }}
      />
      <Text style={[styles.name, {fontSize}]}>{name}</Text>
    </View>
  );
};

export default AccountProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  name: {
    color: '#D6C189',
    fontWeight: '600',
  },
});
