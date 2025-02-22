"use client";
import Link from "next/link";
import NavSearch from "./NavSearch";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  // hide an show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white border-b-[0.5px] border-border-1 pt-8 md:pt-10 pb-4 duration-500 z-50 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container">
          <nav className="flex justify-between items-center">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center gap-5">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden size-10 z-30 relative text-white focus:outline-none overflow-hidden"
              >
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-0 top-1/2">
                  <span
                    className={`absolute h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${
                      isMenuOpen ? "rotate-45 delay-100" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 bg-black transform transition-all duration-100 ease-in-out ${
                      isMenuOpen
                        ? "w-0 opacity-50"
                        : "w-8 delay-100 opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${
                      isMenuOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>

              {/* Logo */}
              <Link href="/" className="logo">
                Exclusive
              </Link>
            </div>

            {/* Navigation items */}
            <ul className="hidden lg:flex gap-12">
              {navItems.map(({ label, route }) => (
                <li
                  key={route}
                  className={
                    pathname === route
                      ? "border-b border-border-2 !font-normal"
                      : ""
                  }
                >
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-6 items-center">
              {/* Nav Search */}
              <div className="hidden md:flex">
                <NavSearch />
              </div>

              {/* Wishlist, Cart, and Profile Icons */}
              <div className="flex items-center gap-4">
                {/* Wishlist */}
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Cart */}
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 5H7L10 22H26"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Profile */}
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 md:top-24 left-0 w-full h-full z-20 transform transition-transform duration-300 ease-in-out text-center bg-white pt-8 translate-y-0">
          <div className="md:hidden flex justify-center mb-8">
            <NavSearch />
          </div>
          <ul className="flex flex-col gap-12">
            {navItems.map(({ label, route }) => (
              <li
                key={route}
                className={pathname === route ? "font-semibold" : ""}
              >
                <Link onClick={() => setIsMenuOpen(false)} href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
