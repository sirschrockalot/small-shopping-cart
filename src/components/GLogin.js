import React from "react";
// import localStorage from "local-storage";

import { GoogleLogin } from "react-google-login";
// refresh token
// import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "1046402052746-2k26ov4dd6hkqdrbn4q6dpj7r4r49nro.apps.googleusercontent.com";

function GLogin(props) {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name} 😍.`);
    localStorage.setItem("user", "Joel");
    props.isLogin(true)
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={false}
      />
    </div>
  );
}

export default GLogin;
