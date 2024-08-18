import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navlink = (
    <>
      <NavLink to={"/main"} className={"my-2 lg:my-0 mx-2 text-black text-lg"}>
        Home
      </NavLink>
    </>
  );

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign-out successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div >
      <div className="navbar lg:px-12 bg-orange-200">
        <div className="navbar-start ">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <h1 className="lg:text-5xl text-3xl font-bold text-orange-500 my-8">
            EzyCart
          </h1>
        </div>

        <div className="navbar-end hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>

        <div>
          {user ? (
            <div className="flex flex-col lg:flex-row items-center ml-3">
              <div className="flex items-center">
                <h3 className="text-xl mx-3">
                  Welcome,{" "}
                  <span className="font-semibold">{user.displayName}</span>
                </h3>
                {user.photoURL && (
                  <div className="avatar">
                    <div className="w-16 lg:w-20 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-xs w-full md:w-2/5 lg:btn-md ml-2 bg-orange-500 text-white border-none"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/"}>
              <button className="btn btn-xs w-full lg:btn-md ml-12 lg:ml-2 bg-orange-500 text-white border-none">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
