import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NotificationIcon from '../../assets/notification-icon.png';
import Profile from '../../assets/profile.png'
import AppointmentImage from '../../assets/appointment.png';



export default function HomeScreen() {
  const navigation = useNavigation();         
  const [steps, setSteps] = useState(12000); 

  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.healthScoreContainer}>
  <View style={styles.profileSection}>
    <Image
      source={Profile} 
      style={styles.profileImage}
    />
    <Text style={styles.username}>Ethan Harkinson</Text>
  </View>
  <TouchableOpacity>
    <Image
      source={NotificationIcon} 
      style={styles.notificationIcon}
    />
  </TouchableOpacity>
</View>


      {/* Health Score */}
      <View style={styles.healthScoreContainer}>
        <Text style={styles.healthScoreText}>Health Score</Text>
        <Text style={styles.healthScoreValue}>2,740</Text>
        <Text style={styles.infoText}>
          This score is for information purposes only.
        </Text>
        <View style={styles.scoreBar}>
          <View style={[styles.scoreProgress, { width: '90%' }]} />
        </View>
      </View>

     
      <TouchableOpacity 
  style={styles.card} 
  onPress={() => navigation.navigate('AppointmentScreen')} 
>
  <View style={styles.cardHeader}>
    <View>
      <Text style={styles.cardTitle}>UPCOMING</Text>
      <Text style={styles.doctorName}>Laurie Simons MD, DipABLM</Text>
      <Text style={styles.doctorSpecialty}>Internal Medicine</Text>
      <Text style={styles.appointmentDetails}>
        Thu, December 21, 2024 | 10:00 AM PST
      </Text>
    </View>
    <View style={styles.cardRightSection}>
    <Text style={styles.arrow}>{'>'}</Text>
      <Image
        source={AppointmentImage}
        style={styles.doctorImage}
      />
      
    </View>
  </View>
</TouchableOpacity>



<Text style={styles.sectionTitle}>Health Overview</Text>
<ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false} 
  contentContainerStyle={styles.healthOverview}
>
  <TouchableOpacity 
    style={[styles.healthBox, { backgroundColor: '#E8F0FE' }]} 
    onPress={() =>  navigation.navigate('StepsScreen')}
  >
    <Text style={styles.healthBoxTitle}>Steps</Text>
    <Text style={styles.healthBoxValue}>12,000</Text>
  </TouchableOpacity>
  
  <TouchableOpacity 
    style={[styles.healthBox, { backgroundColor: '#FFF9C4' }]} 
    onPress={() => navigation.navigate('BMIScreen')}
  >
    <Text style={styles.healthBoxTitle}>BMI</Text>
    <Text style={styles.healthBoxValue}>22.50 kg/m²</Text>
  </TouchableOpacity>
  
  <TouchableOpacity 
    style={[styles.healthBox, { backgroundColor: '#FFE0B2' }]} 
    onPress={() => navigation.navigate('SleepScreen')}
  >
    <Text style={styles.healthBoxTitle}>Sleep</Text>
    <Text style={styles.healthBoxValue}>8 hours</Text>
  </TouchableOpacity>
</ScrollView>



     
      <Text style={styles.sectionTitle}>Let’s check off your to-dos</Text>
      <Text style={styles.todoProgress}>1/4 Completed</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: '25%' }]} />
      </View>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>
          Achieve 30k steps every week for blood sugar
        </Text>
        <Text style={styles.todoDate}>Laurie Simons • Sep 5, 2024</Text>
      </View>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>Take up health Coaching</Text>
        <Text style={styles.todoDate}>Laurie Simons • Sep 5, 2024</Text>
      </View>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>
          Go to a nearby gym and workout for 30 mins
        </Text>
        <Text style={styles.todoDate}>Laurie Simons • Sep 5, 2024</Text>
      </View>
      <View style={styles.todoItemCompleted}>
        <Text style={styles.todoText}>
          Complete 2 courses of Dr. Laurie Simons
        </Text>
        <Text style={styles.todoDate}>Laurie Simons • Aug 30, 2024</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2', 
    padding: 16,
    borderRadius: 10, 
    margin: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ffffff', 
  },
  username: {
    marginLeft: 10,
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#fff', 
  },
  notificationIcon: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
  },
  
  healthScoreContainer: {
    padding: 16,
    backgroundColor: '#4a90e2',
    borderRadius: 10,
    margin: 16,
  },
  healthScoreText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  healthScoreValue: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 8,
  },
  scoreBar: {
    width: 335,
    height: 15,
    backgroundColor: '#ffffff55',
    borderRadius: 5,
    marginTop: 8,
  },
  scoreProgress: {
    height: 5,
    backgroundColor: '#00e676',
    borderRadius: 5,
  },
  card: {
    padding: 16,
    margin: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'column',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#4caf50',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
  },
  appointmentDetails: {
    marginTop: 8,
    fontSize: 12,
    color: '#999',
  },
  cardRightSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 4,
  },
  arrow: {
    fontSize: 24,
    color: '#999',
  },
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  healthOverview: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  healthBox: {
    width: 155,
    height: 129,
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  healthBoxTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  healthBoxValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  todoProgress: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#999',
  },
  progressBar: {
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  progress: {
    height: 5,
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  todoItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  todoItemCompleted: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});





