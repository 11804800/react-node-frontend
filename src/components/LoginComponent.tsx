import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setToken, setUserName } from "../store/User";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";

function LoginComponent() {

  const route = useNavigate();
  const dispatch = useDispatch();
  const [err,setError]=useState("");

  const [showOTP, setShowOTP] = useState("password");
  const [user, setUser] = useState({
    email: "",
    otp: ""
  });

  function OnInputChange(e: any) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function OnFormSubmit() {
    const body = {
      email: user.email,
      otp:user.otp
    }
    axios.post("http://localhost:3000/users/login", body).then((response) => {
      dispatch(setToken(response.data?.token));
      dispatch(setUserName(user.email));
      localStorage.setItem("token", JSON.stringify(response.data?.token));
      localStorage.setItem("username", JSON.stringify(user.email));
      route("/");
    }, (err) =>{
      if(err.status==404)
      {
        setError("No User Not Found!");
      }
      else if(err.status==401)
      {
        setError("UserName Or Otp is Not Correct");
      }
    }).catch((err) => console.log(err.message));
  }

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
              <input type="text" name="email" onChange={OnInputChange} required />
              <div className="input-label">Email</div>
            </div>
            <div className="input-container" style={{ padding: "0px 8px" }}>
              <input type={showOTP} name="otp" onChange={OnInputChange} required />
              <div className="input-label">OTP</div>
              {
                showOTP === "password" ?
                  <FiEyeOff size={23} onClick={() => { setShowOTP("text") }} /> :
                  <BsEye size={23} onClick={() => { setShowOTP("password") }} />
              }

            </div>
            <div className="flex-col">
              <button className="forgot-pwd-btn">Forgot password?</button>
              <div className="flex-row checkbox-div">
                <input type="checkbox" />
                <p>Keep me Logged In</p>
              </div>
            </div>
            <div className="flex-row">
              <button className="Submit-btn" onClick={OnFormSubmit}>
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
              <button className="create-new-acc-btn" onClick={() => route("/signup")}>Create One</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent
