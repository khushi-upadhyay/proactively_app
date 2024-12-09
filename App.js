// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello1  !</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// /Users/admin70/Desktop/provital_app/App.js
import React from 'react';
import AppNavigator from './app/navigation/AppNavigator'; // Import the AppNavigator

export default function App() {
  return <AppNavigator />; // Use AppNavigator to handle navigation
}
