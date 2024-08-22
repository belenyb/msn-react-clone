import './MainWindowLogged.css';

const MainWindowLogged = () => {
  return (
    <>
      <div className="logged-window-header p-1 my-2">
        <div className="row g-0 align-items-center">
          <div className="col-auto">
            <img src="/images/user.png" alt="User profile" width="65" className="border border-2 border-white" />
          </div>
          <div className="col d-flex flex-column ps-2">
            <span className='fw-bold'>belenyb</span>
            <span>&lt;Enter a personal message&gt;</span>
            <div className="d-flex gap-3 pt-1 justify-content-center">
              <img src="./images/header-icons/mail.png" alt="Icon" width="20" />
              <img src="./images/header-icons/folder.png" alt="Icon" width="20" />
              <img src="./images/music.png" alt="Icon" width="20" />
              <img src="./images/header-icons/phone.png" alt="Icon" width="20" />
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
              <img src="/images/user-add.png" alt="Add user" />
            </div>
            <div className="col-auto" role='button'>
              <img src="/images/sort-contacts.png" alt="Sort contacts" />
            </div>
          </div>
          <hr className='mt-2 mb-1' />
          <div className="d-flex gap-2">
            <img src="/images/info.png" alt="Info icon" width={16} />
            <span className="text-primary text-decoration-underline" role='button'>You have 35 pending requests</span>
          </div>
          <hr className='my-1' />
          <details>
            <summary className='fw-bold'>Online (5)</summary>
            <div className="d-flex gap-1" role="button">
              <img src="/images/user-online.png" alt="User icon" width={16} />
              <span>Chat GPT - <span className='text-secondary'>Ask me anything</span></span>
            </div>
            <div className="d-flex gap-1" role="button">
              <img src="/images/user-online.png" alt="User icon" width={16} />
              <span>Panchito - <span className='text-secondary'>Music for life</span></span>
            </div>
            <div className="d-flex gap-1" role="button">
              <img src="/images/user-away.png" alt="User icon" width={16} />
              <span>July07 - <span className='text-secondary'>AFK</span></span>
            </div>
            <div className="d-flex gap-1" role="button">
              <img src="/images/user-online.png" alt="User icon" width={16} />
              <span>Marina - <span className='text-secondary'>I don't wanna miss a thing</span></span>
            </div>
            <div className="d-flex gap-1" role="button">
              <img src="/images/user-online.png" alt="User icon" width={16} />
              <span>MKZ_00 - <span className='text-secondary'>Boreeeed</span></span>
            </div>
            <div className="d-flex gap-1" role="button">
              <img src="/images/user-blocked.png" alt="User icon" width={16} />
              <span>Ernesto <span className='text-secondary'></span></span>
            </div>
          </details>
          <hr className='my-1' />
          <details>
            <summary className='fw-bold'>Offline (2)</summary>
            <div className="d-flex gap-1" role="button">
              <img src="/images/user-invisible.png" alt="User icon" width={16} />
              <span>Max - <span className='text-secondary'>Too cool for school</span></span>
            </div>
            <div className="d-flex gap-1" role="button">
              <img src="/images/user-invisible.png" alt="User icon" width={16} />
              <span>007-ban - <span className='text-secondary'>No worries</span></span>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}

export default MainWindowLogged;
