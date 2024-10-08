import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import googleLogo from "../assets/google-logo-image.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        if (res.user) {
          setLoading(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You are Logged In",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/main");
        }
      })
      .catch((err) => {
        const errorMessage = err.message.split("/")[1].slice(0, -2);
        setError(errorMessage);
        setLoading(false);
      });
  };

  const handleGoogleLogin = ()=>{
    googleLogin()
      .then(() => {
        // console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/main");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <>
      <div className="my-8 p-3">
        <h1 className="text-center lg:text-5xl text-3xl font-bold text-orange-500 mb-3">
          EzyCart
        </h1>
        <h3 className="text-center font-semibold text-lg">
          Find Everything You Need in Just a Few Clicks
        </h3>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row items-center justify-center gap-12">
          <div className="text-center lg:text-left">
            <div className="flex justify-center items-center w-full">
              <img
                src={loginImg}
                alt=""
                className="object-cover w-full max-w-md"
              />
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <h1 className="text-3xl lg:text-5xl font-bold text-center mb-5">
                Login now!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {error && <h3 className="text-center text-red-600">{error}</h3>}
              <div className="form-control mt-3">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full px-4 py-2 border flex justify-center gap-2 rounded-lg mb-3"
                >
                  <img className="w-6 h-6" src={googleLogo} alt="google logo" />
                  <span>Login with Google</span>
                </button>
                {loading ? (
                  <button className="btn bg-orange-600 text-lg">
                    <ImSpinner9 className="animate-spin" />
                  </button>
                ) : (
                  <button className="btn bg-orange-600 text-white">
                    Login
                  </button>
                )}
              </div>
              <h4 className="text-center">
                Don't have an account?{" "}
                <Link
                  to={"/registration"}
                  className="text-orange-600 font-semibold"
                >
                  Register
                </Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
