import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { StackRouter } from './src/routes/StackRouter'

const App = () => {
  
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  )
};

export default App;