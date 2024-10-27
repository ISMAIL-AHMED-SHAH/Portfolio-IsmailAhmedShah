import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav: React.FC<Props> = ({ openNav }) => {
  const [navBg, setNavBg] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 90) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "bg-transparent"
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Link href="/" passHref>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={110}
            height={110}
            className="ml-[-1.5rem] sm:ml-0 cursor-pointer"
            priority
          />
        </Link>
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url} passHref>
                <p className="nav_link hover:text-gray-400 transition duration-300 cursor-pointer">
                  {navlink.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact" passHref>
              <button
                className="md:px-10 md:py-3 px-8 py-3 text-blue-950 font-semibold sm:text-base text-sm bg-white hover:bg-purple-300 transition-all duration-200 rounded-lg"
                aria-label="Hire Me"
              >
                Hire Me
              </button>
            </Link>
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
              aria-label="Open Navigation"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
