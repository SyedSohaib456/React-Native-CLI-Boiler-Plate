import './theme/global.css'
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Button from '~core/components/Button';
import CSS from '~theme/styles/StyleUtil';
function App() {
  return (
    <SafeAreaView className='bg-red-400 flex-1' style={[CSS.bgYellowGradient]}>
      <StatusBar barStyle="dark-content" />
      <View className="bg-red-500">
        <Text className='text-3xl'>Welcome to DoctorHunt</Text>
        <Text>This is a simple React Native app.</Text>
        <Button title={'HELLO'} onPress={() => console.log('home')} />
      </View>
    </SafeAreaView>
  );
}

export default App;
