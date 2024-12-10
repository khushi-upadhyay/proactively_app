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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 


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
      {/* User Info Section */}
      <View style={styles.userInfo}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/100', // Replace with actual user image URL
          }}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>
            {userData?.name || 'Ethan Harkinson'} {/* Replace with name */}
          </Text>
          <Text style={styles.emailText}>
            {userData?.email || 'ethanharkinson@outlook.com'} {/* Replace with email */}
          </Text>
        </View>
      </View>

      {/* Account Section */}
      <TouchableOpacity style={styles.accountSection}>
        <View style={styles.accountIcon}>
          <Text style={styles.accountIconText}>⚙️</Text> {/* Replace with actual icon if needed */}
        </View>
        <Text style={styles.accountText}>Account</Text>
      </TouchableOpacity>

      {/* Logout Section */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>

      {/* Version Info */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Proactively version 0.0.1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row', // Aligns items in a row
    alignItems: 'center', // Vertically center content
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E5E7EB',
    marginRight: 15, // Space between image and text
  },
  textContainer: {
    flex: 1, // Allow text to take remaining space
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  emailText: {
    fontSize: 14,
    color: '#707070',
  },
  accountSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  accountIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  accountText: {
    fontSize: 16,
    color: '#000',
  },
  logoutContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  logoutText: {
    fontSize: 16,
    color: '#d9534f',
  },
  versionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
