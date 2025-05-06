import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Gap, RoomCard, BackArrowSearch} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {
  getDatabase,
  ref,
  get,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchRooms = useCallback(async () => {
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

              return {
                id: roomId,
                ...room,
                hostName: hostData.name,
                hostPhoto: hostData.photo,
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              };
            } catch {
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

  const filteredRooms = rooms.filter(room =>
    room.name?.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <ScrollView style={styles.container}>
      <Gap height={40} />
      <BackArrowSearch searchText={searchText} onChangeText={setSearchText} />
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : filteredRooms.length === 0 ? (
          <Text style={styles.text}>No matching rooms found.</Text>
        ) : (
          filteredRooms.map(room => (
            <RoomCard
              key={room.id}
              quote={room.name}
              imageSource={{uri: room.thumbnail}}
              name={room.hostName}
              photo={room.hostPhoto}
              onPress={async () => {
                try {
                  const db = getDatabase();
                  const snapshot = await get(ref(db, `rooms/${room.id}`));
                  if (snapshot.exists()) {
                    navigation.navigate('LiveRoom', {roomCode: room.id});
                  } else {
                    Alert.alert(
                      'Room Not Found',
                      'This room may have been deleted.',
                    );
                  }
                } catch (err) {
                  Alert.alert('Error', 'Failed to check room availability.');
                }
              }}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
