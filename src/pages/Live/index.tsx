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
      setLoading(true);
      try {
        const db = getDatabase();
        const roomsRef = ref(db, 'rooms');
        const roomsQuery = query(
          roomsRef,
          orderByChild('isPrivate'),
          equalTo(false),
        );
        const snapshot = await get(roomsQuery);

        if (snapshot.exists()) {
          const roomData = snapshot.val();
          const fetchPromises = Object.entries(roomData).map(
            async ([roomId, room]) => {
              try {
                const userIds = Object.keys(room.users || {});
                const creatorId = userIds.length > 0 ? userIds[0] : room.host;
                const hostSnapshot = await get(ref(db, `users/${creatorId}`));

                if (!hostSnapshot.exists()) return null;

                const hostData = hostSnapshot.val();

                // Extract YouTube video ID from embed URL
                const videoIdMatch = room.videoSource?.match(
                  /(?:\/embed\/|v=)([a-zA-Z0-9_-]{11})/,
                );
                const videoId = videoIdMatch?.[1] || '';

                return {
                  id: roomId,
                  ...room,
                  hostName: hostData.name,
                  hostPhoto: hostData.photo,
                  thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                };
              } catch (err) {
                console.warn(`Error fetching host for room ${roomId}`, err);
                return null;
              }
            },
          );

          const roomList = (await Promise.all(fetchPromises)).filter(Boolean);
          setRooms(roomList);
        } else {
          setRooms([]);
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
        setRooms([]);
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
                imageSource={{uri: room.thumbnail}}
                name={room.hostName}
                photo={room.hostPhoto}
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
    alignItems: 'center',
    paddingBottom: 20,
  },
  content: {
    width: '100%',
    alignItems: 'center',
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
