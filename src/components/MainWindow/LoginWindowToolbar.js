const WindowToolbar = ({ onClose }) => {
  return (
    <div className="d-flex justify-content-between align-items-center handle">
      <div>
        <img src="/favicon.ico" alt="Windows Live Messenger icon" width="25" className="p-1" />
        <span className="text-white ps-1">Windows Live Messenger</span>
      </div>
      <div className="d-flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white" className="bi bi-dash-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white" className="bi bi-window-fullscreen" viewBox="0 0 16 16">
          <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
          <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z" />
        </svg>
        <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white" className="close-btn bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </div>
    </div>
  );
}

export default WindowToolbar;
