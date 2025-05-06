import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Search} from '../../components/molecules';
import {Gap, RoomCard} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {
  getDatabase,
  ref,
  get,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database';

const Live = () => {
  const navigation = useNavigation();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const db = getDatabase();
        const roomsRef = ref(db, 'rooms');
        const roomsQuery = query(
          roomsRef,
          orderByChild('isPrivate'),
          equalTo(false),
        ); // Fetch only public rooms
        const snapshot = await get(roomsQuery);

        if (snapshot.exists()) {
          const roomList = [];
          // Fetch user data for each room's host
          snapshot.forEach(async childSnapshot => {
            const room = childSnapshot.val();
            const hostId = room.host;

            // Fetch host data from the users node
            const hostRef = ref(db, `users/${hostId}`);
            const hostSnapshot = await get(hostRef);

            if (hostSnapshot.exists()) {
              const hostData = hostSnapshot.val();
              roomList.push({
                id: childSnapshot.key,
                ...room,
                hostName: hostData.name, // Add host's name
                hostPhoto: hostData.photo, // Add host's photo
              });
            }
          });

          // Once all the rooms and host data are fetched, set the state
          setRooms(roomList);
        } else {
          console.log('No public rooms found.');
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Search />
      </View>
      <Gap height={20} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          {rooms.length > 0 ? (
            rooms.map(room => (
              <RoomCard
                key={room.id}
                onPress={() =>
                  navigation.navigate('LiveRoom', {roomCode: room.id})
                }
                quote={room.name}
                imageSource={{
                  uri: `https://img.youtube.com/vi/${
                    room.videoSource.split('/')[4]
                  }/maxresdefault.jpg`, // Generate image URL from video source
                }}
                name={room.hostName} // Pass the host's name
                photo={room.hostPhoto} // Pass the host's photo (base64 or URL)
              />
            ))
          ) : (
            <Text style={styles.text}>No public rooms available</Text>
          )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
