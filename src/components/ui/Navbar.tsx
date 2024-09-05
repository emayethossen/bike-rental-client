import { MenuIcon, SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import webLogo from "../../assets/images/bike-logo.png";
import { logout } from "../../redux/features/authSlice";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <nav className="bg-[#E0F7FA] text-[#121416]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={webLogo} alt="Logo" className="h-12 w-auto" />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                                >
                                    Home
                                </Link>
                                {user && user.role === 'admin' && (
                                    <>
                                        <Link
                                            to="/admin/dashboard"
                                            className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                )}
                                {user && user.role === 'user' && (
                                    <>
                                        <Link
                                            to="/user/dashboard"
                                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                )}

                                <Link
                                    to="/bikes"
                                    className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                                >
                                    All Bikes
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <form onSubmit={handleSearch} className="hidden md:block">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="px-3 py-2 rounded-md text-base border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                            />
                            <button
                                type="submit"
                                className="ml-2 px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white hover:bg-blue-600"
                            >
                                Search
                            </button>
                        </form>
                        {user ? (
                            <>
                                <span className="px-3 py-2 rounded-md text-base font-medium">
                                    {user.name || 'User'}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <form onSubmit={handleSearch} className="md:hidden flex justify-center">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search..."
                                        className="px-3 w-1/2 ml-12 py-1 text-base border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                    <button
                                        type="submit"
                                        className="px-3 text-base font-medium bg-blue-500 text-white hover:bg-blue-600"
                                    >
                                        <SearchIcon className="block w-4" aria-hidden="true" />
                                    </button>
                                </form>
                                <Link
                                    to="/login"
                                    className="block px-3 py-2 rounded-md text-base font-medium hidden md:flex hover:bg-[#FEF2F2]"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="block px-3 py-2 rounded-md text-base font-medium hidden md:flex hover:bg-[#FEF2F2]"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-500 focus:text-white"
                            >
                                {isOpen ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                    >
                        Home
                    </Link>
                    {user && user.role === 'admin' && (
                        <>
                            <Link
                                to="/admin/dashboard"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                            >
                                Dashboard
                            </Link>
                        </>
                    )}
                    {user && user.role === 'user' && (
                        <>
                            <Link
                                to="/user/dashboard"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                            >
                                Dashboard
                            </Link>
                        </>
                    )}

                    <Link
                        to="/bikes"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                    >
                        All Bikes
                    </Link>
                    <Link
                        to="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                    >
                        Contact
                    </Link>
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
