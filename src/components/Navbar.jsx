import { useState } from "react";
import { IoLogoApple } from "react-icons/io5";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <header className="fixed inset-x-0 top-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center h-12 px-4 sm:px-6 lg:px-8 justify-center relative">
        <div className="hidden lg:flex items-center gap-8">
          <IoLogoApple className="text-2xl text-gray-800 hover:text-gray-900 transition flex-shrink-0" />

          <nav className="flex gap-6 text-sm text-gray-700">
            {links.map((item) => (
              <button
                key={item}
                className="whitespace-nowrap hover:underline hover:text-gray-900 transition"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <FiSearch
              size={18}
              className="hover:text-gray-900 transition cursor-pointer"
            />
            <FiShoppingCart
              size={18}
              className="hover:text-gray-900 transition cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center lg:hidden flex-1">
          <IoLogoApple className="text-2xl text-gray-800 hover:text-gray-900 transition flex-shrink-0" />
        </div>

        <div className="absolute right-4 flex items-center gap-4">
          <div className="flex lg:hidden items-center gap-4">
            <FiSearch
              size={18}
              className="hover:text-gray-900 transition cursor-pointer"
            />
            <FiShoppingCart
              size={18}
              className="hover:text-gray-900 transition cursor-pointer"
            />
            <button
              className="text-gray-700 hover:text-gray-900 transition"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-1 py-2 px-4 text-gray-700">
            {links.map((item) => (
              <li
                key={item}
                className="py-2 hover:bg-gray-100 hover:text-gray-900 rounded transition cursor-pointer"
              >
                {item}
              </li>
            ))}
            <li className="flex items-center gap-2 py-2 hover:bg-gray-100 hover:text-gray-900 rounded transition cursor-pointer">
              <FiSearch size={16} />
              <span>Search</span>
            </li>
            <li className="flex items-center gap-2 py-2 hover:bg-gray-100 hover:text-gray-900 rounded transition cursor-pointer">
              <FiShoppingCart size={16} />
              <span>Cart</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
