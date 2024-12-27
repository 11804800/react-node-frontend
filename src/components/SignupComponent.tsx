import { useRef, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom"
import { format } from "../utils/utils";
import axios from "axios";
import { setToken, setUserName } from "../store/User";
import { useDispatch } from "react-redux";

type T = {
  email: string,
  fullname: string,
  otp:string
}

function SignupComponent() {


  const dispatch=useDispatch();
  const route = useNavigate();


  const [showOTP, setShowOTP] = useState("password");
  const DateInputRef: any = useRef(null);

  const [DateOfBirth, setDateOfBirth] = useState(null);
  const [User, setUser] = useState<T>({
    email: "",
    fullname: "",
    otp:""
  });

  function OnInputChange(e: any) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function OnFormSubmit() {
    const body={
      dob:DateOfBirth,
      email:User.email,
      fullname:User.fullname,
      otp:User.otp
    }
    axios.post("http://localhost:3000/users/signup",body).then((response)=>{
      dispatch(setToken(response?.data?.token));
      dispatch(setUserName(User.email));
      localStorage.setItem("token", JSON.stringify(response.data?.token));
      localStorage.setItem("username", JSON.stringify(User.email));
      route("/");
    },(err)=>alert(err.message)).then((err)=>console.log(err));
  }

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
              <input type="text" required name="fullname" onChange={OnInputChange} />
              <label className="input-label">Full Name</label>
            </div>
            <div className="date-input-container" onClick={() => { DateInputRef.current?.showPicker() }}>

              <img src="./date-icon.png" width="20" />
              {
                DateOfBirth ?
                  <p>{format(new Date(DateOfBirth))}</p> :
                  <span >Date of Birth</span>
              }

              <input type="date"  ref={DateInputRef} required name="dob" className={`${DateOfBirth ? "hidden":"not-visible"}`} onChange={(e: any) => setDateOfBirth(e.target.value)} />
              
            </div>
            <div className="input-container">
              <input type="text" name="email" onChange={OnInputChange} required />
              <label className="input-label">Email</label>
            </div>
            <div className="input-container" style={{ padding: "0px 8px" }}>
              <input type={showOTP} required name="otp" onChange={OnInputChange} />
              <label className="input-label">OTP</label>
              {
                showOTP === "password" ?
                  <FiEyeOff size={23} onClick={() => { setShowOTP("text") }} /> :
                  <BsEye size={23} onClick={() => { setShowOTP("password") }} />
              }
              
            </div>

            <div className="flex-row">
              <button className="Submit-btn" onClick={OnFormSubmit}>
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
              <button className="create-new-acc-btn" onClick={() => route("/")}>Sign In</button>
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
