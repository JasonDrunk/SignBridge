import "./SignUp.css";
import { useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { gapi } from "gapi-script";

// used to decode the credentials from the google token
import { jwtDecode } from "jwt-decode";
import type { GoogleCredentialResponse } from "@react-oauth/google";
import axios from "axios";

const clientId =
  "52594958094-08qvrugskhjjv34j4h0oi4m2ognjg830.apps.googleusercontent.com";

function SignUp() {
  useEffect(() => {
    function initGapi() {
      gapi.client.init({
        clientId: clientId,
        scope: "email profile",
      });
    }
    gapi.load("client:auth2", initGapi);
  });

  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [confirmpassword, setconfirmPassword] = useState("");
  const handleConfirmPasswordChange = (e) => {
    setconfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const onSuccess = (res: GoogleCredentialResponse) => {
    console.log("Sign Up Success: currentUser:", res);

    const decoded = jwtDecode(res.credential as string);
    console.log(decoded);
  };

  const onFailure = () => {
    console.log("Sign Up failed");
  };

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log("Sign Up Success: currentUser:", credentialResponse);
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${credentialResponse.access_token}`,
            },
          }
        );
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    },
    onError: () => {
      console.log("Login failed");
    },
  });

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <div className="sign-up-form">
        <form onSubmit={handleSubmit}>

          <div className="sign-up-form-group">
            <input type="text" placeholder=" " value={username} onChange={handleUsernameChange} />
            <label htmlFor="inp" className="sign-up-form-label">Username</label>
          </div>

          <div className="sign-up-form-group">
            <input type="email" placeholder=" " value={email} onChange={handleEmailChange} />
            <label htmlFor="inp" className="sign-up-form-label">Email</label>
          </div>

          <div className="sign-up-form-group">
            <input type="password" placeholder=" " value={password} onChange={handlePasswordChange} />
            <label htmlFor="inp" className="sign-up-form-label">Password</label>
          </div>

          <div className="sign-up-form-group">
            <input type="password" placeholder=" " value={confirmpassword} onChange={handleConfirmPasswordChange} />
            <label htmlFor="inp" className="sign-up-form-label">Confirm Password</label>
          </div>

          <button className="sign-up-btn" type="submit">Sign Up</button>

          <div>or</div>

          <button className="google-sign-up-btn" type="button" onClick={() => login()} >
            <img src="/images/google-logo.png" alt="Google Logo" className="google-logo" />
            Sign Up with Google
          </button>

          <div className="login-link">
            <div>Already have an account?</div> <a href="/login">Login Here</a>
          </div>

        </form>
      </div>
    </div>
  );
}

export default SignUp;
