import image from '../../assets/download.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl md:text-2xl font-bold">Recipe Calories</a>
      </div>
      <div className="flex-none gap-2">
        {/* Nav Links for medium to larger screens */}
        <ul className="hidden md:flex gap-6 pr-8">
          <li className="hover:text-green-500 cursor-pointer">Home</li>
          <li className="hover:text-green-500 cursor-pointer">Recipes</li>
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Search</li>
        </ul>
        
        {/* Search input for medium to larger screens */}
        <div className="hidden md:block form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

        {/* Dropdown for mobile navigation */}
        <div className="md:hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>

        {/* Profile Avatar */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar bg-green-500">
            <div className="w-10 rounded-full">
              <img src={image} alt="User avatar" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
