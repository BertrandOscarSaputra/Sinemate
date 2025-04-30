import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Search} from '../../components/molecules';
import {Gap, RoomCard} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const Live = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Search />
      </View>
      <Gap height={20} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <RoomCard
            onPress={() => navigation.navigate('LiveRoom')}
            quote="Yu-Gi-Oh Watch"
            imageSource={{
              uri: 'https://img.youtube.com/vi/jv_yYeOOjUw/maxresdefault.jpg',
            }}
          />
          <RoomCard
            onPress={() => navigation.navigate('LiveRoom')}
            quote="Yu-Gi-Oh Watch"
            imageSource={{
              uri: 'https://img.youtube.com/vi/jv_yYeOOjUw/maxresdefault.jpg',
            }}
          />
          <RoomCard
            onPress={() => navigation.navigate('LiveRoom')}
            quote="Yu-Gi-Oh Watch"
            imageSource={{
              uri: 'https://img.youtube.com/vi/jv_yYeOOjUw/maxresdefault.jpg',
            }}
          />
          <RoomCard
            onPress={() => navigation.navigate('LiveRoom')}
            quote="Yu-Gi-Oh Watch"
            imageSource={{
              uri: 'https://img.youtube.com/vi/jv_yYeOOjUw/maxresdefault.jpg',
            }}
          />
          <RoomCard
            onPress={() => navigation.navigate('LiveRoom')}
            quote="Yu-Gi-Oh Watch"
            imageSource={{
              uri: 'https://img.youtube.com/vi/jv_yYeOOjUw/maxresdefault.jpg',
            }}
          />
        </View>
      </ScrollView>
    </View>
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
  scrollViewContent: {
    alignItems: 'center', // Centers the RoomCard components horizontally
    paddingBottom: 20, // Adds space at the bottom of the scroll
  },
  content: {
    width: '100%', // Ensures RoomCard takes the full width available in the ScrollView
    alignItems: 'center', // Centers the content within the container
  },
});
