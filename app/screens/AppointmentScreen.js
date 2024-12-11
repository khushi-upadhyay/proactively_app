import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppointmentImage from '../../assets/appointment.png';

const AppointmentScreen = () => {
  const navigation = useNavigation();

  const openMeetingLink = async () => {
    const url = 'https://meet.google.com/landing'; 
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', "Can't open the meeting link.");
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{'\u2190'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointment details</Text>
      </View>

     
      <View style={styles.statusBadgeContainer}>
        <Text style={styles.statusBadge}>UPCOMING</Text>
      </View>

     
      <View style={styles.infoContainer}>
        <Image
          source={AppointmentImage} 
          style={styles.profileImage}
        />
        <Text style={styles.infoTitle}>Your upcoming appointment with</Text>
        <Text style={styles.doctorName}>Laurie Simons, MD, DipABLM</Text>

        <View style={styles.appointmentLabelContainer}>
          <Text style={styles.appointmentLabel}>Appointment</Text>
        </View>

        <Text style={styles.appointmentDate}>Thu, December 21, 2024 | 10:00 AM PST</Text>
      </View>

      {/* Meeting Link */}
      <View style={styles.linkContainer}>
        <Text style={styles.linkLabel}>Meeting link:</Text>
        <Text style={styles.linkText}>www.meet.google.com/abc-defa-dwa</Text>
      </View>

      {/* Join Button */}
      <TouchableOpacity style={styles.joinButton} onPress={openMeetingLink}>
        <Text style={styles.joinButtonText}>Join meeting {'\u2197'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  statusBadgeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  appointmentLabelContainer: {
    backgroundColor: '#E0D7F9',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 12,
  },
  appointmentLabel: {
    color: '#7C4DFF',
    fontSize: 14,
  },
  appointmentDate: {
    fontSize: 16,
    color: '#555',
  },
  linkContainer: {
    marginBottom: 20,
  },
  linkLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
  },
  joinButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AppointmentScreen;
