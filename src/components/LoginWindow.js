import Draggable from "react-draggable";
import "./LoginWindow.css";

const LoginWindow = ({ onClose }) => {
  return (
    <Draggable handle=".handle">
      <div className="login-window p-2 position-relative">
        <div className="d-flex justify-content-between align-items-center handle">
          <div>
            <img src="/favicon.ico" alt="Windows Live Messenger icon" width="25" className="p-1" />
            <span className="text-white ps-1">Windows Live Messenger</span>
          </div>
          <div className="d-flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white" class="bi bi-dash-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white" class="bi bi-window-fullscreen" viewBox="0 0 16 16">
              <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
              <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z" />
            </svg>
            <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="white" class="close-btn bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex justify-content-center my-5">
              <img src="/images/user.png" alt="User" className="border border-2 border-white" width="130" />
            </div>
            <form className="px-4">
              <div class="mb-2 d-flex flex-column">
                <label for="emailInput">E-mail address:</label>
                <input type="email" class="border border-secondary" id="emailInput" placeholder="" />
              </div>
              <div class="mb-2 d-flex flex-column">
                <label for="passwordInput">Password:</label>
                <input type="password" class="border border-secondary" id="passwordInput" placeholder="" />
              </div>
              <div class="d-flex gap-1">
                <label for="statusInput">Status:</label>
                <select className="bg-transparent border-0 outline-none">
                  <option value="1" selected>Online</option>
                  <option value="2">Offline</option>
                  <option value="3">Away</option>
                </select>
              </div>
              <div class="d-flex gap-1 mt-4">
                <input type="checkbox" name="rememberMeInput" id="rememberMeInput" />
                <label for="rememberMeInput">Remember me</label>
              </div>
              <div className="text-center">
                <button className="my-3 px-3 text-center" type="button">Sign in</button>
              </div>
            </form>
          </div>
          <div className="links px-4 d-flex flex-column text-primary">
            <span role="button">Forgot your password?</span>
            <span role="button">Service status</span>
            <span role="button">Sign up for a Windows Live ID</span>
          </div>
        </div>
        <div className="position-absolute bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
          </svg>
          <span className="text-secondary ps-1">Windows Live ID</span>
        </div>
      </div>
    </Draggable>
  );
}

export default LoginWindow;
