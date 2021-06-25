import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "1046402052746-2k26ov4dd6hkqdrbn4q6dpj7r4r49nro.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
