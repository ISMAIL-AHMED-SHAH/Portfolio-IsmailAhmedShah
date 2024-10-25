import React from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

const NavLink = ({ href, label }: { href: string, label: string }) => (
  <a 
    href={href} 
    className="hover:text-gray-400 transition duration-300"
    aria-label={label}
  >
    {label}
  </a>
);

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <img src="/images/logo.png" alt="logo" width={130} height={150} className="mx-auto" />

      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href} label={link.label} />
        ))}
      </div>

      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2024 All Rights Reserved by Ismail Ahmed Shah
      </p>
    </div>
  );
}

export default Footer;
