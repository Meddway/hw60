import React, {useEffect, useState} from 'react';
import PostMessage from '../PostMessage/PostMessage';

const url = 'http://146.185.154.90:8000/messages';

interface Props {
  id: string;
  message: string;
  author: string;
  datetime: string;
}

const GetMessages: React.FC<Props> = () => {
  const [messagesUser, setMessagesUser] = useState<Props[]>([]);
  const getMessages = async () => {
    try {
      const response = await fetch(url);
      const messagesUser: Props[] = await response.json();
      const reverseMessagesUser = messagesUser.reverse();
      const newMessageUser = reverseMessagesUser.map((message) => ({
        ...message,
      }));
      setMessagesUser(newMessageUser);
      console.log(newMessageUser);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    setInterval(() => {
      void getMessages();
    }, 3000);
  }, []);

  return (
    <div>
      {messagesUser.map((message) => (
        <PostMessage
          key={message.datetime}
          message={message.message}
          author={message.author}
          datetime={message.datetime.slice(0, 16)}
        />
      ))}
    </div>
  );
};

export default GetMessages;
