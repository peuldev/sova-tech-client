import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="card-body lg:w-1/2 mx-auto">
        <h3 className="text-2xl text-center font-semibold">Account Login</h3>
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
        </div>
      </form>
    </div>
  );
};

export default Login;
