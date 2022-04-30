import React from "react";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { SiFacebook } from "react-icons/si";
import { toast } from "react-toastify";
import useToken from "../Hooks/useToken";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  facebookError && toast.error(facebookError.message);
  const [token] = useToken(facebookUser);
  token && navigate(from, { replace: true });
  return (
    <div>
      <div className="or">
        <div></div>
        OR
        <div></div>
      </div>
      <div className="social-logins">
        <p>{facebookLoading && `Loadin Please Wait`}</p>
        <div className="social-btn" onClick={() => signInWithFacebook()}>
          <SiFacebook />
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
