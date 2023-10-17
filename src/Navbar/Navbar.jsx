import { Link, NavLink } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  // const { user, logOut } = useAuth();
  return (
    <div className="bg-base-100 shadow-xl mb-3 rounded-md">
      <div className="navbar bg-base-100">
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
              className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-amber-500 underline text-sm font-bold"
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
                      ? "text-amber-500 underline text-sm font-bold"
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
                      ? "text-amber-500 underline text-sm font-bold"
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
                      ? "text-amber-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <a className=" bg-gray-100 lg:px-3 rounded-md font-extrabold text-lg text-amber-500 lg:text-3xl">
            Brand Shop
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1">
            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-amber-500 bg-base-300 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-amber-500 bg-base-300 rounded-md px-3 text-lg font-bold"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-amber-500 bg-base-300 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                My Cart
              </NavLink>
            </li>
            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-amber-500 bg-base-300 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <div className="navbar-end">
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
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
