function LoginComponent() {
  return (
    <div className="container">
      <div className="side-container">
        <img src="./background-image.jpg" alt="Container_img" className="side-container-img" />
      </div>
      <div className="form-container">
        <div className="form-div inter">
          <div className="header-div">
            <img src="./header.png" alt="header-img" className="header-img" />
          </div>
          <div className="title-div">
            <p className="inter title">Sign In</p>
            <p className="inter comment">Please login to continue with your account</p>
          </div>
          <div className="form">
            <div className="input-container">
              {/* <label className="input-label">Email</label> */}
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-container">
              {/* <label className="input-label">OTP</label> */}
              <input type="text" placeholder="OTP" />
            </div>
            <div className="flex-col">
              <button className="forgot-pwd-btn">Forgot password?</button>
              <div className="flex-row checkbox-div">
                <input type="checkbox" />
                <p>Keep me Logged In</p>
              </div>
            </div>
            <div className="flex-row">
              <button className="Submit-btn ">
                Sign In
              </button>
            </div>
            <div className="flex-row" style={{ justifyContent: "center", padding: "18px 0px" }}>
              <div className="line-break">
              </div>
              <span className="line-break-text">or</span>
            </div>
            <div className="flex-row" >
              <button className="google-btn">
                <span>Sign In with Google</span> <img src="./google-img.png" width="14" />
              </button>
            </div>
            <div className="flex-row font-medium" style={{ justifyContent: "center" }}>
              <p className="comment">
                Need an account?
              </p>
              <button className="create-new-acc-btn">Create One</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent
