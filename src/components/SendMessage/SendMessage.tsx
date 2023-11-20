import React, { useState } from 'react';
import './SendMessage.css';

interface Message {
  message: string;
  author: string;
  datetime: string;
  _id: string;
}

const SendMessage: React.FC = () => {
  const [author, setAuthor] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async () => {
    try {
      const response = await fetch('http://146.185.154.90:8000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `message=${encodeURIComponent(newMessage)}&author=${encodeURIComponent(author)}`,
      });
      const data: Message = await response.json();
      setNewMessage('');
      setAuthor('');
      setMessages((prevMessages) => [...prevMessages, data]);
    } catch (error) {
      console.error('Error send message:', error);
      console.log(messages);
    }
  };

  return (
    <div>
      <input
        id="authorInput"
        name="author"
        className='inputName'
        type="text"
        placeholder="Enter name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        id="messageInput"
        name="message"
        className='inputMessage'
        type="text"
        placeholder="Enter message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className='btnSendMessage' onClick={handleSendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessage;
