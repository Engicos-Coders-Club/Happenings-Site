import "./Login.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google";

function GoogleLogin() {

  // store them in redux --------->
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <button onClick={() => login()} className="google-login">
        <GoogleIcon />
        Sign in with Google
      </button>
    </div>
  );
}

export default GoogleLogin;
