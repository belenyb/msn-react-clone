import { React, useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Draggable from "react-draggable";
import Markdown from 'react-markdown';
import './ChatWindow.css';

function ChatWindow({ onClose }) {
  const emojiList = Array.from({ length: 32 }, (_, index) => (
    <li key={index} role='button'>
      <img src={`images/emojis/${index + 1}.png`} alt="emoji" />
    </li>
  ));

  const playTiltSound = () => {
    const audio = new Audio('/sounds/tilt.mp3');
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.classList.remove('shake');
    void chatWindow.offsetWidth;
    chatWindow.classList.add('shake');
    audio.play();
  };

  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState('');

  // Google AI Studio
  const API_KEY = "AIzaSyAB1yTtnClkBGP8wP2iSxnmYDEj_Z0cTBg";
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Scroll to bottom after render
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatHistory]);

  async function askGemini() {
    setIsLoading(true);
    try {
      const prompt = message;
      const userMessage = { type: "user", message: prompt };

      setChatHistory(prevChatHistory => [...prevChatHistory, userMessage]);
      setMessage('');

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const botMessage = { type: "bot", message: text };

      setChatHistory(prevChatHistory => [...prevChatHistory, botMessage]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Draggable
      handle=".handle">
      <div className='chat-window position-relative' id="chatWindow">
        <div className="d-flex justify-content-between align-items-center handle px-2">
          <div className='d-flex align-items-center'>
            <img src="/images/user-online.png" alt="Online user icon" width="35" className="p-1" />
            <div className='d-grid'>
              <span className="ps-1 fw-bold lh-1">Gemini</span>
              <span className="ps-1 lh-1">Ask me anything</span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#787878" className="bi bi-dash-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#787878" className="bi bi-window-fullscreen" viewBox="0 0 16 16">
              <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
              <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z" />
            </svg>
            <svg role='button' onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#787878" className="close-btn bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </div>
        <div className="d-flex gap-3 p-2 border-1 border-top">
          <img role="button" src="./images/user-invite.png" alt="Icon" width="20" />
          <img role="button" src="./images/header-icons/folder.png" alt="Icon" width="20" />
          <img role="button" src="./images/music.png" alt="Icon" width="20" />
          <img role="button" src="./images/header-icons/phone.png" alt="Icon" width="20" />
          <img role="button" src="./images/games.png" alt="Icon" width="20" />
          <img role="button" src="./images/user-blocked.png" alt="Icon" width="20" />
        </div>
        <div className="row g-0 mx-2">
          <div className="col">
            <div className="me-2 messages-block white-box d-flex flex-column pt-1 overflow-auto">

              {chatHistory.map((chat, index) => (
                <div key={index} className='mb-2 px-2'>
                  <p className='m-0 fw-bold message-user'> {chat.type === "bot" ? "Gemini says: " : "belenyb says: "} </p>
                  <div className={`m-0 message ${chat.type}`}>
                    <Markdown className="mb-0">{chat.message}</Markdown>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="d-flex justify-content-center mb-0 mb-lg-2 separator">
              <span className='fw-bolder'>. . . . . . . . </span>
            </div>
            <div className="white-box me-2">
              <div className="d-flex gap-2 chat-box-toolbar">
                <div className='px-2 my-1 border-end'>
                  <div className="btn-group dropup">
                    <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/emoticon.png" alt="Emoji" />
                    </button>
                    <ul className="dropdown-menu emojis-grid">
                      {emojiList}
                    </ul>
                  </div>
                  <img className='ps-2' src="/images/tilt.png" alt="Tilt icon" role='button' onClick={playTiltSound} />
                </div>
                <div className='d-flex align-items-center gap-2'>
                  <img src="/images/bg.png" alt="icons" role='button' width="18" />
                  <img src="/images/text.png" alt="icons" role='button' width="18" />
                  <img src="/images/voice.png" alt="icons" role='button' width="18" />
                </div>
              </div>
              <div className="px-2 d-flex chat-box">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      askGemini();
                    }
                  }}
                  className='w-100 my-1'
                ></textarea>
                <div className="d-grid gap-1 ps-1 py-1 chat-buttons">
                  <button onClick={askGemini} type='button' className='send-button'></button>
                  <button type='button' className='search-button'>Search</button>
                </div>
              </div>
              <div className="chat-box-toolbar">
                <p className='is-writing-label m-0'> {isLoading ? "Gemini is writing..." : "‎ "} </p>
              </div>
            </div>
          </div>
          <div className="col-auto d-flex flex-column justify-content-between">
            <div className='p-lg-2 p-1 bg-white'>
              <img src="/images/gemini.png" alt="User profile" width="100" className="user-profile-pic border border-2 border-white" />
            </div>
            <div className='p-lg-2 p-1 bg-white'>
              <img src="/images/user.png" alt="User profile" width="100" className="user-profile-pic border border-2 border-white" />
            </div>
          </div>
        </div>
        <div className='position-absolute bottom-0'>
          <img src="/favicon.ico" alt="Windows Live Messenger icon" width="25" className="p-1" />
          <span className="ps-1">Windows Live Messenger</span>
        </div>
      </div>
    </Draggable>
  )
}

export default ChatWindow;
