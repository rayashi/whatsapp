import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Background from '../../assets/chat-bg.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function ChatBody({content}) {
  const [text, onChangeText] = React.useState(' ');

  return (
    <KeyboardAvoidingView style={styles.content} behavior="height">
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.content}>
        <SafeAreaView style={styles.inputBar}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputWrapperMessage}>
              <MaterialIcons style={styles.emogiIcon} name="tag-faces" />
              <TextInput
                placeholder="Menssagem"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View style={styles.inputWrapperButtons}>
              <FontAwesome style={styles.inputWrapperIcon} name="paperclip" />
              <Entypo style={styles.inputWrapperIcon} name="camera" />
            </View>
          </View>
          <View style={styles.inputButton}>
            <MaterialIcons style={styles.inputButtonIcon} name="mic" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  inputBar: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
  },
  inputWrapperMessage: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrapperButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#128C7E',
    borderRadius: 20,
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  inputButtonIcon: {
    color: 'white',
    padding: 5,
    fontSize: 22,
  },
  emogiIcon: {
    color: 'gray',
    fontSize: 20,
  },
  inputWrapperIcon: {
    color: 'gray',
    fontSize: 18,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
});
