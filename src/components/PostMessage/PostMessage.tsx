import React from 'react';
import './PostMessages.css';

interface Props {
  message: string;
  author: string;
  datetime: string;
}

const PostMessage: React.FC<Props> = ({message, author, datetime}) => {
  return (
    <div className="divMessagesUser">
      <div className="divAuthorDate">
        <p className="pAuthor"><b>Author:</b> {author}</p>
        <p className="pDate"><b>Date:</b> {datetime}</p>
      </div>
      <p className="pMessages"><b>Message:</b> {message}</p>
    </div>
  );
};

export default PostMessage;