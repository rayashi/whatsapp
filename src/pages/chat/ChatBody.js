import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../../assets/chat-bg.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import ChatMessages from './ChatMessages';

export default function ChatBody({content}) {
  const [text, onChangeText] = useState('');
  const [answerIndex, setAnswerIndex] = useState(0);
  const [messages, setMessages] = useState([]);

  const onSend = async () => {
    if (text) {
      setMessages([...messages, {sender: 'me', text}]);
      onChangeText('');
    }
  };

  useEffect(() => {
    if (messages.at(-1)?.sender === 'me') {
      setTimeout(() => {
        const mockMessage = content.answers[answerIndex];
        setMessages([...messages, {sender: 'contact', ...mockMessage}]);
        setAnswerIndex(answerIndex + 1);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, content]);

  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.content}>
        <View style={styles.messages}>
          <ChatMessages messages={messages} />
        </View>

        <SafeAreaView style={styles.inputBar}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputWrapperMessage}>
              <MaterialIcons style={styles.emogiIcon} name="tag-faces" />
              <TextInput
                placeholder="Menssagem"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                onSubmitEditing={onSend}
              />
            </View>
            <View style={styles.inputWrapperButtons}>
              <FontAwesome style={styles.inputWrapperIcon} name="paperclip" />
              <Entypo style={styles.inputWrapperIcon} name="camera" />
            </View>
          </View>
          <TouchableOpacity style={styles.inputButton} onPress={onSend}>
            {text === '' ? (
              <MaterialIcons style={styles.inputButtonIcon} name="mic" />
            ) : (
              <MaterialIcons style={styles.inputButtonIcon} name="send" />
            )}
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  messages: {
    flex: 1,
  },
  inputBar: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
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
