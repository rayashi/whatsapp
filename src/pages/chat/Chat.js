import React from 'react';
import ChatBody from './ChatBody';
import ChatHeader from './ChatHeader';

export default function Chat({content}) {
  return (
    <>
      <ChatHeader content={content} />
      <ChatBody content={content} />
    </>
  );
}
