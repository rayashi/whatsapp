import React, {useRef} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
          {message.text ? (
            <Text style={styles.text}>{message.text}</Text>
          ) : message.img ? (
            <Image source={{uri: message.img}} style={styles.image} />
          ) : null}

          <AntDesign
            style={
              message.sender === 'me'
                ? styles.myMessageCaret
                : styles.contactMessageCaret
            }
            name="caretdown"
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  message: {
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E7FFDB',
    borderTopRightRadius: 0,
    marginRight: 12,
  },
  myMessageCaret: {
    position: 'absolute',
    top: -6,
    right: -6,
    color: '#E7FFDB',
    fontSize: 18,
  },
  contactMessageCaret: {
    position: 'absolute',
    top: -6,
    left: -6,
    color: 'white',
    fontSize: 18,
  },
  contactMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderTopLeftRadius: 0,
    marginLeft: 12,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
