import { useNavigate } from "react-router-dom"

function SignupComponent() {
  const route =useNavigate();
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-div inter">
          <div className="header-div">
            <img src="./header.png" alt="header-img" className="header-img" />
          </div>
          <div className="title-div">
            <p className="inter title">Sign Up</p>
            <p className="inter comment">Signup to enjoy the feature of HD</p>
          </div>
          <div className="form">
            <div className="input-container">
              {/* <label className="input-label">Email</label> */}
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-container">
              {/* <label className="input-label">Email</label> */}
              <input type="text" placeholder="Date of Birth" />
            </div>
            <div className="input-container">
              {/* <label className="input-label">OTP</label> */}
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-container">
              {/* <label className="input-label">OTP</label> */}
              <input type="text" placeholder="OTP" />
            </div>

            <div className="flex-row">
              <button className="Submit-btn ">
                Sign Up
              </button>
            </div>
            <div className="flex-row" style={{ justifyContent: "center", padding: "18px 0px" }}>
              <div className="line-break">
              </div>
              <span className="line-break-text">or</span>
            </div>
            <div className="flex-row" >
              <button className="google-btn">
                <span>Continue with Google</span> <img src="./google-img.png" width="14" />
              </button>
            </div>
            <div className="flex-row font-medium" style={{ justifyContent: "center" }}>
              <p className="comment">
                Already Have an account?
              </p>
              <button className="create-new-acc-btn" onClick={()=>route("/")}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
      <div className="side-container">
        <img src="./background-image.jpg" alt="Container_img" className="side-container-img" />
      </div>
    </div>
  )
}

export default SignupComponent
