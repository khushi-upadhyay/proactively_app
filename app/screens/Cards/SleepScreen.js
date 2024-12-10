import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For moon icon with Z

export default function SleepEntryScreen() {
  const [hours, setHours] = useState(8); // Initial sleep hours

  const incrementHours = () => {
    setHours((prev) => Math.min(prev + 1, 24)); // Max hours capped at 24
  };

  const decrementHours = () => {
    setHours((prev) => Math.max(prev - 1, 0)); // Min hours capped at 0
  };

  const handleSubmit = () => {
    Alert.alert('Sleep Entry Submitted', `You slept for ${hours} hours.`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Alert.alert('Back')}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sleep entry</Text>
      </View>

      {/* Sleep Hours */}
      <View style={styles.sleepEntryContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={decrementHours}
          disabled={hours <= 0}
        >
          <MaterialCommunityIcons
            name="minus-circle-outline"
            size={30}
            color={hours <= 0 ? '#ddd' : '#000'}
          />
        </TouchableOpacity>

        <View style={styles.sleepInfo}>
          <MaterialCommunityIcons
            name="moon-sleep"
            size={24}
            color="#000"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.hoursText}>{hours} hours</Text>
        </View>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={incrementHours}
          disabled={hours >= 24}
        >
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={30}
            color={hours >= 24 ? '#ddd' : '#000'}
          />
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  sleepEntryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  iconButton: {
    padding: 5,
  },
  sleepInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  hoursText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#3B82F6',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
