import GetMessages from './components/GetMessages/GetMessages';
import MessageForm from './components/SendMessage/SendMessage';

const App = () => (
  <>
    <MessageForm/>
    <GetMessages
      id = ''
      message = ''
      author = ''
      datetime = ''
    />

  </>
);

export default App;