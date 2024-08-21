import LoginWindow from './components/LoginWindow';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLoginWindow, setShowLoginWindow] = useState(false);

  const toggleLoginWindow = (isVisible) => {
    setShowLoginWindow(isVisible);
  };

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
      {showLoginWindow && <LoginWindow onClose={() => toggleLoginWindow(false)} />}
    </div>
  );
}

export default App;
