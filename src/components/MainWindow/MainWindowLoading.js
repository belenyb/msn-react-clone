const LoginWindowLoading = ({handleClick}) => {
  return (
    <>
    <div className='d-flex flex-column justify-content-between'>
      <div>
        <div className="d-flex justify-content-center my-5">
          <img src="/images/user.png" alt="User" className="border border-2 border-white" width="130" />
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>Signing in...</span>
          <img src="/images/signing-in.gif" alt="MSN Signing in" width="100" />
        </div>
      </div>
      <div className="text-center" onClick={handleClick}>
        <button className="my-3 px-3 text-center" type="button">Cancel</button>
      </div>
    </div>
    <div className="links d-flex position-absolute bottom-0 py-1">
      <span role="button" className='text-primary'>Privacy statement</span>
      <span role="button" className='px-1'>|</span>
      <span role="button" className='text-primary'>Server status</span>
    </div>
    </>
  )
}

export default LoginWindowLoading;
