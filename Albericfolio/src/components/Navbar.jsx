import { Biohazard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "accueil", text: "Accueil" },
    { to: "apropos", text: "À propos de moi" },
    { to: "experience", text: "Mes Expériences" },
    { to: "projects", text: "Projets" },
    { to: "contact", text: "Me Contacter" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link
          to="accueil"
          smooth
          duration={500}
          className="flex items-center text-3xl font-bold cursor-pointer"
        >
          <Biohazard className="text-warning w-10 h-10 mr-2" />
          Albe<span className="text-warning">DEV</span>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map(({ to, text }) => (
            <NavItem key={to} to={to} text={text} />
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-center pb-4">
          {navLinks.map(({ to, text }) => (
            <NavItem key={to} to={to} text={text} onClick={closeMenu} />
          ))}
        </ul>
      )}
    </nav>
  );
};

const NavItem = ({ to, text, onClick }) => (
  <li className="inline-block px-4 py-2 hover:text-warning transition-colors duration-300">
    <Link
      to={to}
      smooth
      duration={500}
      spy
      offset={-80}
      activeClass="text-warning"
      className="cursor-pointer"
      onClick={onClick}
    >
      {text}
    </Link>
  </li>
);

export default Navbar;
