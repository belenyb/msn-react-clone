import React, { useState } from 'react';
import MainWindow from './components/MainWindow/MainWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';
import './App.css';


function App() {
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [showChatWindow, setShowChatWindow] = useState(false);

  function toggleLoginWindow(isVisible) {
    setShowLoginWindow(isVisible);
  };

  function toggleChatWindow(isVisible) {
    setShowChatWindow(isVisible);
  }

  return (
    <div className="App">
      <div className="windows-app-icons position-absolute top-0 start-0 p-2">
        <div className='d-flex flex-column align-items-center mb-2 p-2'>
          <img src="/images/recycle-bin.webp" alt="Windows recycle bin" width="50" />
          <span className='text-white'>Recycle Bin</span>
        </div>
        <div className='d-flex flex-column align-items-center p-2' onDoubleClick={() => toggleLoginWindow(true)}>
          <img src="/images/msn.webp" alt="Windows Live Messenger icon" width="50" />
          <span className='text-white text-center lh-1'>Windows Live <br /> Messenger</span>
        </div>
      </div>
      {showLoginWindow && <MainWindow onClose={() => toggleLoginWindow(false)} toggleChatWindow={() => toggleChatWindow(true)} />}
      <div>
        {showChatWindow && <ChatWindow onClose={() => toggleChatWindow(false)} />}
      </div>
    </div>
  );
}

export default App;
