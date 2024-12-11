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
import Profile from '../../assets/profile.png'

export default function AccountScreen({ navigation }) {
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const session = await AsyncStorage.getItem('userSession');
        if (session) {
          const parsedData = JSON.parse(session);
          setUserData(parsedData);
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userSession'); 
      navigation.navigate('Login'); 
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

  
  const userName = userData?.email ?? 'No email found';

  return (
    <View style={styles.container}>
     
      <View style={styles.userInfo}>
        <Image
          source={Profile}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{userName}</Text>
        </View>
      </View>

     
      <TouchableOpacity style={styles.accountSection}>
        <View style={styles.accountIcon}>
          <Text style={styles.accountIconText}>⚙️</Text>
        </View>
        <Text style={styles.accountText}>Account</Text>
      </TouchableOpacity>

   
      <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>

      
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E5E7EB',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
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
