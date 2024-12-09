// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function AccountScreen({ navigation }) {
//   const handleLogout = () => {
//     navigation.navigate('Login'); // Add Login screen later
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Profile Information</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });




import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AccountScreen({ navigation }) {
  const [userData, setUserData] = useState(null); // Holds the user's session data
  const [loading, setLoading] = useState(true); // Loading state for async operations

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const session = await AsyncStorage.getItem('userSession');
        if (session) {
          setUserData(JSON.parse(session)); // Parse and set the user data
        } else {
          navigation.navigate('Login'); // Redirect to login if no session found
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load user data.');
      } finally {
        setLoading(false); // Stop the loader
      }
    };

    fetchUserData();
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userSession'); // Clear the stored session
      navigation.navigate('Login'); // Redirect to the login screen
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* User Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/100', // Replace with actual user image URL
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {userData?.email || 'Username'} {/* Display the email or username */}
        </Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: '#E5E7EB',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#d9534f',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
