import { useState } from "react";
import Axios from "axios";

function Login() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [usernameLogin2, setUsernameLogin2] = useState("");

  const [OTPLogin, setOTPLogin] = useState("");

  const [userDisplay, setUserDisplay] = useState("");

  const reg = () => {
    Axios.post("http://localhost:3003/Reg", {
      username: usernameReg,
      password: passwordReg,
    }).then((Response) => {
      console.log(Response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3003/Login", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((Response) => {
      if (Response.data.message) {
        alert(Response.data.message);
      } else {
        setUserDisplay(Response.data[0].username);
      }
      console.log(Response.data);
    });
  };

  const login2 = () => {
    Axios.post("http://localhost:3003/loginOTP", {
      username: usernameLogin2,
    }).then((Response) => {
      console.log(Response);
      if (Response.statusText === "OK") {
        if (Response.data.message === "SMS sent successfully") {
          document.getElementById("OTPdetails").style.display = "inline-block";
          document.getElementById("OTPdetails2").style.display = "inline-block";
        } else {
          alert(Response.data.message);
        }
      } else {
        alert("not works");
      }
    });
  };

  const OTPverify = () => {
    Axios.post("http://localhost:3003/OTPverify", {
      OTP: OTPLogin,
    }).then((Response) => {
      console.log(Response);
      alert(Response.data.message);
    });
  };

  return (
    <div className="LogRegMain">
      <div className="reg">
        <h1>REGISTER</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            // console.log("in");
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={reg}>submit</button>
      </div>

      <div className="login">
        <h1>LOGIN</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            // console.log("in");
            setUsernameLogin(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
        />
        <button onClick={login}>submit</button>
      </div>

      <div className="login2">
        <h1>LOGIN</h1>
        <label>phone number</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameLogin2(e.target.value);
          }}
        />
        <button onClick={login2}>submit</button>

        <label>OTP</label>
        <input
          className="OTPdetails"
          id="OTPdetails"
          type="text"
          onChange={(e) => {
            setOTPLogin(e.target.value);
          }}
        />
        <button className="OTPdetails2" id="OTPdetails2" onClick={OTPverify}>
          submit
        </button>
      </div>

      <h1>{userDisplay}</h1>
    </div>
  );
}

export default Login;
