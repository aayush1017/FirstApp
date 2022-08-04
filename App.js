/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   backgroundColor: colors.darkBlue,
  // };

  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ?
        (<>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>) :
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {setHistory([...history, subject])}}
          clearSubject={() => setCurrentSubject(null)}
        />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    flex: 1,
  },
});

export default App;
