import { useState } from 'react';
import Draggable from "react-draggable";
import WindowToolbar from './LoginWindowToolbar';
import LoginWindowLoading from './MainWindowLoading';
import MainWindowNotLogged from './MainWindowNotLogged';
import MainWindowLogged from './MainWindowLogged';
import "./MainWindow.css";

const MainWindow = ({ onClose, toggleChatWindow }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (value) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setIsLoggedIn(value);
  }
  return (
    <Draggable
    handle=".handle">
      <div className={`login-window p-2 position-relative ${isLoading && "isLoading"}`}>
        <WindowToolbar onClose={onClose} />

        {isLoading && <LoginWindowLoading handleClick={() => handleClick(false)} />}

        {!isLoggedIn && !isLoading &&
          <MainWindowNotLogged handleClick={() => handleClick(true)} />
        }

        {isLoggedIn && !isLoading &&
          <MainWindowLogged toggleChatWindow={toggleChatWindow} />
        }
      </div>
    </Draggable>
  );
}

export default MainWindow;
