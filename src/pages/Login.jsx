import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // create a new user
    signIn(email, password)
      .then((res) => {
        swal("Good job!", "user logged in successfully", "success");
        navigate("/");
      })
      .catch((error) => {
        if (error.message === "Password mismatch error message") {
          swal("Error!", "please try again!", "error");
        } else {
          swal(
            "Error!",
            "email and Password doesn't match, please try again!",
            "error"
          );
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p>
              New to this page? please
              <Link to="/register">
                <button className="btn btn-link">Register</button>
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
