import React, { useState } from 'react';
import ChatbotButton from './ChatbotButton';
import ChatWindow from './ChatWindow';
import { useGeminiAI } from '../../hooks/useGeminiAI';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, isLoading } = useGeminiAI();

  return (
    <>
      <ChatbotButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        onSend={sendMessage}
        isLoading={isLoading}
      />
    </>
  );
};

export default Chatbot;