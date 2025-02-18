import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/">
        <a href="#" className="text-xl md:text-3xl font-extrabold text-pink-700">
          Flopentine 💔
        </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-pink-800 text-lg font-medium">
          <a href="#" className="hover:text-pink-600 transition">Home</a>
          <a href="#how-it-works" className="hover:text-pink-600 transition">How It Works</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-pink-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md top-full left-0 w-full text-center">
          <a href="#" className="block py-3 text-pink-800 hover:bg-pink-100">Home</a>
          <a href="#how-it-works" className="block py-3 text-pink-800 hover:bg-pink-100">How It Works</a>
        </div>
      )}
    </header>
  );
};

export default Header;
