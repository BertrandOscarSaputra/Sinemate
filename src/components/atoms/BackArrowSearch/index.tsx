import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput as Input,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Arrow} from '../../../assets';

const BackArrowSearch = ({searchText, onChangeText}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowContainer}>
        <Arrow />
      </TouchableOpacity>
      <Input
        placeholder="Search..."
        value={searchText}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#8e8e93"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#000000',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    paddingBottom: 10,
  },
  input: {
    flex: 1, // <-- Make input take all available width
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1F1F1F',
    color: '#FFFFFF',
  },
});

export default BackArrowSearch;
