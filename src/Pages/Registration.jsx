import { useContext, useState } from "react";
import registerImg from "../assets/Register.png";
import { AuthContext } from "../Components/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";
const Registration = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {        
        if (res.user) {
          updateUser(name).then(() => {
            setLoading(false);
            e.target.reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your have been registered",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          });
        }
      })
      .catch((err) => {
        const errorMessage = err.message.split("/")[1].slice(0, -2);
        setError(errorMessage);
        setLoading(false);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content gap-8">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl text-3xl font-bold text-orange-500 my-8">
            EzyCart
          </h1>
          <div>
            <img src={registerImg} alt="" />
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegistration}>
            <h1 className="text-5xl font-bold text-center mb-5">
              Register now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                {loading ? (
                  <button className="btn bg-orange-600 text-lg">
                    <ImSpinner9 className="animate-spin" />
                  </button>
                ) : (
                    <button className="btn bg-orange-600 text-white">Register</button>
                )}
              </div>
              <h4 className="text-center">
                Already have an account ?{" "}
                <Link to={"/"} className="text-orange-600 font-semibold">
                  Login
                </Link>
              </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
