import React from "react";
import registerImg from "../assets/Register.png";
const Registration = () => {
    const handleRegistration = ()=>{
        
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content gap-8">
        <div className="text-center lg:text-left">
      <h1 className="lg:text-5xl text-3xl font-bold text-orange-500 my-8">EzyCart</h1>
          <div><img src={registerImg} alt="" /></div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegistration}>
          <h1 className="text-5xl font-bold text-center mb-5">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-600 text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
