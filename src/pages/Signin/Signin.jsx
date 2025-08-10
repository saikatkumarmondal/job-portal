import React, { use } from "react";
import Login2 from "../../assets/Login2.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import SocialLogin from "../Shared/SocialLogin";
const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location in Signin:", location);
  const from = location.state || "/";
  const { signinUser } = use(AuthContext);
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    console.log(email, password);
    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            animationData={Login2}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Signin now!</h1>
            <form onSubmit={handleSignin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">
                    Register here
                    <span className="underline text-blue-900 font-bold">
                      Register
                    </span>
                  </a>
                </div>
                <button className="btn btn-neutral mt-4">Signin</button>
              </fieldset>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
