import { useState } from 'react';
import Draggable from "react-draggable";
import LoginWindowToolbar from './MainWindowToolbar';
import LoginWindowLoading from './MainWindowLoading';
import MainWindowNotLogged from './MainWindowNotLogged';
import MainWindowLogged from './MainWindowLogged/MainWindowLogged';
import "./MainWindow.css";

const LoginWindow = ({ onClose }) => {
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
    <Draggable handle=".handle">
      <div className={`login-window p-2 position-relative ${isLoading && "isLoading"}`}>
        <LoginWindowToolbar onClose={onClose} />

        {isLoading && <LoginWindowLoading handleClick={() => handleClick(false)} />}

        {!isLoggedIn && !isLoading &&
          <MainWindowNotLogged handleClick={() => handleClick(true)} />
        }

        {isLoggedIn && !isLoading &&
          <MainWindowLogged />
        }
      </div>
    </Draggable>
  );
}

export default LoginWindow;
