// App.js

import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PresentationScreen from './src/Presentation';
import AboutMeScreen from './src/AboutMe';
import CourseScreen from './src/Course';
import InstitutionScreen from './src/Institution';

export default function App() {
  const [screen, setScreen] = useState('Presentation');

  const navigateTo = (screenName) => {
    setScreen(screenName);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'Presentation':
        return <PresentationScreen navigateTo={navigateTo} />;
      case 'AboutMe':
        return <AboutMeScreen navigateTo={navigateTo} />;
      case 'Course':
        return <CourseScreen navigateTo={navigateTo} />;
      case 'Institution':
        return <InstitutionScreen navigateTo={navigateTo} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20 
  }
});
