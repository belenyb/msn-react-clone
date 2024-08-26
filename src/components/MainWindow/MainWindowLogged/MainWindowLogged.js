import './MainWindowLogged.css';

const MainWindowLogged = ({ toggleChatWindow }) => {
  return (
    <div>
      <div>
        <div className="logged-window-header p-1 my-2 position-relative">
          <div className="row g-0 align-items-center">
            <div className="col-auto">
              <img src="/images/user.png" alt="User profile" width="65" className="border border-2 border-white" />
            </div>
            <div className="col d-flex flex-column ps-2">
              <span className='fw-bold'>belenyb</span>
              <span>&lt;Enter a personal message&gt;</span>
              <div className="d-flex gap-3 pt-1 justify-content-center">
                <img src="./images/msn-icons/mail.png" alt="Icon" width="20" />
                <img src="./images/msn-icons/folder.png" alt="Icon" width="20" />
                <img src="./images/msn-icons/music.png" alt="Icon" width="20" />
                <img src="./images/msn-icons/phone.png" alt="Icon" width="20" />
                <img src="./images/footer-icon.png" alt="Icon" width="20" />
              </div>
            </div>
          </div>
        </div>
        <div className="logged-window-body p-2 bg-white">
          <div className="toolbar">
            <div className="row g-0">
              <div className="col">
                <input type="search" className='w-100' name="" id="" placeholder="Find a contact or number..." />
              </div>
              <div className="col-auto px-2" role='button'>
                <img src="/images/user/user-add.png" alt="Add user" />
              </div>
              <div className="col-auto" role='button'>
                <img src="/images/msn-icons/sort-contacts.png" alt="Sort contacts" />
              </div>
            </div>
            <hr className='mt-2 mb-1' />
            <div className="d-flex gap-2">
              <img src="/images/msn-icons/info.png" alt="Info icon" width={16} />
              <span className="text-primary text-decoration-underline" role='button'>You have 35 pending requests</span>
            </div>
            <hr className='my-1' />
            <details open>
              <summary className='fw-bold'>Online (5)</summary>
              <div className="d-flex gap-1" role="button" onDoubleClick={toggleChatWindow}>
                <img src="/images/user/user-online.png" alt="User icon" width={16} />
                <span>Gemini - <span className='text-secondary'>Ask me anything</span></span>
              </div>
              <div className="d-flex gap-1" role="button">
                <img src="/images/user/user-online.png" alt="User icon" width={16} />
                <span>Oº°‘¨PanchitO¨‘°ºO - <span className='text-secondary'>Music for life <img src="/images/emojis/29.png" alt="Music icon" width={10} /></span></span>
              </div>
              <div className="d-flex gap-1" role="button">
                <img src="/images/user/user-away.png" alt="User icon" width={16} />
                <span>July07 - <span className='text-secondary'>AFK</span></span>
              </div>
              <div className="d-flex gap-1" role="button">
                <img src="/images/user/user-online.png" alt="User icon" width={16} />
                <span>Marina - <span className='text-secondary'>ι ∂σи-т ωαииα мιѕѕ α тнιиg</span></span>
              </div>
              <div className="d-flex gap-1" role="button">
                <img src="/images/user/user-online.png" alt="User icon" width={16} />
                <span>MKZ_00 - <span className='text-secondary'>Boreeeed <img src="/images/emojis/22.png" alt="Music icon" width={10} /></span></span>
              </div>
              <div className="d-flex gap-1" role="button">
                <img src="/images/user/user-blocked.png" alt="User icon" width={16} />
                <span>Ernesto <span className='text-secondary'></span></span>
              </div>
            </details>
            <hr className='my-1' />
            <details open>
              <summary className='fw-bold'>Offline (2)</summary>
              <div className="d-flex gap-1" role="button">
                <img src="/images/user/user-invisible.png" alt="User icon" width={16} />
                <span>Max - <span className='text-secondary'>Too cool for school</span></span>
              </div>
              <div className="d-flex gap-1" role="button">
                <img src="/images/user/user-invisible.png" alt="User icon" width={16} />
                <span>(¯`·._.·[007-ban]·._.·´¯) - <span className='text-secondary'>No worries</span></span>
              </div>
            </details>
          </div>
        </div>
      </div>
      <div>
        <span>Advertisement</span>
        <img src="https://gifdb.com/images/high/microsoft-internet-explorer-admk702irl7ymxag.webp" alt="Ads" className='w-75' />
      </div>
      <div className="position-absolute bottom-0 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
          <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
        </svg>
        <span className="text-secondary ps-1">Windows Live ID</span>
      </div>
    </div>
  );
}

export default MainWindowLogged;
