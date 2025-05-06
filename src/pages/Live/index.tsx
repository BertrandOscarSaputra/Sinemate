import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
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

  const fetchRooms = useCallback(async () => {
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

              const videoIdMatch = room.videoSource?.match(
                /(?:\/embed\/|v=)([a-zA-Z0-9_-]{11})/,
              );
              const videoId = videoIdMatch?.[1] || '';

              const fullRoom = {
                id: roomId,
                ...room,
                hostName: hostData.name,
                hostPhoto: hostData.photo,
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              };

              console.log('Fetched public room:', fullRoom);
              return fullRoom;
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
  }, []);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  const handleRefresh = () => {
    fetchRooms();
  };

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

      <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>

      <Gap height={20} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          {rooms.length > 0 ? (
            rooms.map(room => (
              <RoomCard
                key={room.id}
                onPress={async () => {
                  console.log('Navigating to room with code:', room.id);
                  console.log(
                    'Full room object:',
                    JSON.stringify(room, null, 2),
                  );

                  try {
                    const db = getDatabase();
                    const roomRef = ref(db, `rooms/${room.id}`);
                    const snapshot = await get(roomRef);

                    if (snapshot.exists()) {
                      console.log(`✅ Room ${room.id} confirmed in database.`);
                      navigation.navigate('LiveRoom', {roomCode: room.id});
                    } else {
                      console.warn(`❌ Room ${room.id} not found in database.`);
                      Alert.alert(
                        'Room Not Found',
                        'This room may have been deleted.',
                      );
                    }
                  } catch (err) {
                    console.error(
                      'Error checking room before navigation:',
                      err,
                    );
                    Alert.alert('Error', 'Failed to check room availability.');
                  }
                }}
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
  refreshButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  refreshButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
