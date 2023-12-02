import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fristName = form.first_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    const registerInfo = {
      fristName,
      lastName,
      email,
      password,
      photo: photoURL,
    };
    console.log(registerInfo);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form className="card-body lg:w-1/2 mx-auto" onSubmit={handleRegister}>
        <h3 className="text-2xl text-center font-semibold border-b-2">
          Register Account
        </h3>
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
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="photoURL"
            placeholder="Photo URL"
            className="input input-bordered"
            required
            name="photoURL"
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
