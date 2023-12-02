import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/gogle.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProviders";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setloginError] = useState("");
  const [loginsuccess, setLoginSuccess] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = { email, password };
    console.log(loginInfo);
    setloginError("");
    setLoginSuccess("");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setLoginSuccess("login successful");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setloginError(error.message);
      });
  };
  const handeGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form className="card-body lg:w-1/2 mx-auto" onSubmit={handleLogin}>
        <h3 className="text-2xl text-center font-semibold border-b-2">
          Account Login
        </h3>
        {loginError && <p>{loginError}</p>}
        {loginsuccess && <p>{loginsuccess}</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">E-Mail Address</span>
          </label>
          <input
            type="email"
            placeholder="E-Mail Address"
            className="input input-bordered"
            required
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            required
            name="password"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover ">
              Forgotten Password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-custom_yellow hover:bg-custom_blue hover:text-custom_white ">
            Login
          </button>
          <p className="py-2">
            New user?
            <Link to="/register" className="hover:text-custom_blue">
              {" "}
              Register Here
            </Link>
          </p>
          <div
            onClick={handeGoogleLogin}
            className="flex items-center mx-auto border rounded-lg cursor-pointer hover:bg-custom_blue hover:text-custom_white py-2 px-5"
          >
            <img className="w-5" src={logo} alt="" />
            <p className="ml-2"> Sign up with Google</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
