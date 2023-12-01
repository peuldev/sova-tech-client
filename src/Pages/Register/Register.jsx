import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="card-body lg:w-1/2 mx-auto lg:mt-14">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered"
            required
            name="first_name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered"
            required
            name="last_name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">E-Mail</span>
          </label>
          <input
            type="email"
            placeholder="E-Mail"
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
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-custom_yellow hover:bg-custom_blue hover:text-custom_white">
            Register
          </button>
          <p className="py-2">
            Already have an account?{" "}
            <Link to="/login" className="hover:text-custom_blue">
              Login Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
