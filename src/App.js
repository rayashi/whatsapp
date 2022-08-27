import React from 'react';
import type {Node} from 'react';
import {View, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import Themes from './Themes';
import Chat from './pages/chat/Chat';
import chat from './Mock';

export const ThemeContext = React.createContext(Themes.light);

const App: () => Node = () => {
  const theme = useColorScheme() === 'dark' ? Themes.dark : Themes.light;

  return (
    <ThemeContext.Provider value={theme}>
      <View style={styles.content}>
        <StatusBar barStyle="light-content" />
        <Chat content={chat} />
      </View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1},
});

export default App;
