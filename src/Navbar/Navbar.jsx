import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import useAuth from "../Hooks/useAuth";
// import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className=" bg-gradient-to-r from-cyan-800 to-sky-500 shadow-xl mb-3 rounded-md text-white">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/addProduct"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Add Product
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/myCart"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  My Cart
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="  lg:px-3 rounded-md font-extrabold text-lg text-red-500 lg:text-3xl">
            <img
              className="h-[60px] rounded-md"
              src="https://i.ibb.co/9vYRNvy/knnjkhpt.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1 ">
            <li className="text-white text-xl font-bold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-cyan-500 py-2 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="text-white text-xl font-bold">
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-white bg-cyan-500 py-2 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className="text-white text-xl font-bold">
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-cyan-500 py-2 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                My Cart
              </NavLink>
            </li>
            <li className="text-white text-xl font-bold">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-cyan-500 py-2 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li className="text-white text-xl font-bold">
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-cyan-500 py-2 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center">
              <div className="mr-3">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="text-black text-sm lg:text-lg font-semibold">
                {user.displayName}
              </div>
              <button className="btn btn-sm ml-3" onClick={logOut}>
                Log out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
