import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import Contact from '../../assets/contact.jpg';

export default function ChatHeader({content}) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <AntDesign style={styles.backButton} name="arrowleft" />
        <Image source={Contact} style={styles.avatar} />
        <Text style={styles.contactName}>{content.contact.name}</Text>
      </View>

      <View style={styles.content}>
        <Entypo style={styles.toolButton} name="video-camera" />
        <Entypo style={styles.toolButton} name="phone" />
        <Entypo style={styles.toolButton} name="dots-three-vertical" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#128C7E',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingTop: -10,
  },
  contactName: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    color: 'white',
    fontSize: 20,
    marginRight: 5,
  },
  toolButton: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
});
