import { StrictMode } from 'react';
import logo from './logo.svg';
import './App.css';
import {useContext} from 'react';
import {UserContext} from './contexts/user'
import {Message} from './components/message'

function App() {
  return (
    <StrictMode>
      <UserContext>
        <Message />
      </UserContext>
    </StrictMode>
  );
}

export default App;
