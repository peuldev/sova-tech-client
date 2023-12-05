import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProviders";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fristName = form.first_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const accepted = e.target.terms.checked;
    const registerInfo = {
      fristName,
      lastName,
      email,
      password,
      photo: photoURL,
    };
    // pass check
    if (password.length < 6) {
      setRegisterError("is less than 6 characters");
      return;
    }
    // validation cheak
    else if (!/[A-Z]/.test(password)) {
      setRegisterError("don't have a capital letter");
      return;
    }

    // term and conditions checkbox
    else if (!accepted) {
      setRegisterError("Please accepted term and conditions");
      return;
    }
    // error reset
    setRegisterError("");
    setSuccess("");
    // create user new user
    createUser(email, password)
      .then((result) => {
        setSuccess("User Account Created Successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <form className="card-body lg:w-1/2 mx-auto" onSubmit={handleRegister}>
        <h3 className="text-2xl text-center font-semibold border-b-2">
          Register Account
        </h3>
        {registerError && <p>{registerError}</p>}
        {success && <p>{success}</p>}
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
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered"
            required
            name="password"
          />
          <div className="flex justify-end">
            <span
              className="absolute -mt-7 pr-6"
              onClick={() => setshowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEye></AiFillEye>
              ) : (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              )}
            </span>
          </div>
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
        {/* trems  */}
        <div>
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2 " htmlFor="terms">
            Accept{" "}
            <a href="">
              <span className="hover:underline text-custom_bg">
                Terms and conditions
              </span>
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
