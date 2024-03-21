import Link from "next/link";
import { useState, useEffect } from "react";
import menuItems from "../data/menuItems.json";
import { useRouter } from "next/router";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = (event) => {
    event.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileMenuOpen && !event.target.closest("#mobile-menu-button")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="relative bg-[#2b3a27] text-white shadow-lg">
      <div className="max-w-6xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link href="/">
                <p className="flex items-center py-4 px-2">
                  <span className="font-semibold text-lg tracking-tight">
                    My Website
                  </span>
                </p>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => {
                const isActive = router.pathname === item.route;
                return (
                  <Link href={item.route} id={item.id}>
                    <p
                      className={`py-4 px-2 text-gray-300 hover:text-[#edc89f] transition duration-300 ${
                        isActive ? "font-bold text-[#e8b57b]" : ""
                      }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              className="outline-none mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-[#e8b57b] "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } z-50`}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <ul className="flex flex-col">
            {menuItems.map((item) => {
              const isActive = router.pathname === item.route;
              return (
                <li key={item.id} className="w-full">
                  <Link href={item.route}>
                    <p
                      onClick={closeMobileMenu}
                      className={`block text-sm px-2 py-4 text-gray-700 font-semibold transition duration-300 hover:bg-[#edc89f] ${
                        isActive ? "font-extrabold text-[#e8b57b]" : ""
                      }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
