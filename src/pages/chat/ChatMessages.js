import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ChatMessages({messages}) {
  const scrollViewRef = useRef();

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }>
      {messages.map(message => (
        <View
          style={[
            styles.message,
            message.sender === 'me' ? styles.myMessage : styles.contactMessage,
          ]}>
          <Text style={styles.text}>{message.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  message: {
    padding: 8,
    margin: 5,
    borderRadius: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E7FFDB',
  },
  contactMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  },
  text: {},
});
