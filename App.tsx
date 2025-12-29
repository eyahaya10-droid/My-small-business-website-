
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu as MenuIcon, X, ShoppingBag, Star, ChevronRight } from 'lucide-react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import { BRAND } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-red-700 leading-tight">CRAVINGS</span>
            <span className="text-xs tracking-widest text-orange-500 font-semibold uppercase">& MORE</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-red-700' : 'text-gray-600 hover:text-red-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={BRAND.glovoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-800 transition-all shadow-md flex items-center gap-2"
            >
              <ShoppingBag size={16} />
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg font-medium text-gray-700 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={BRAND.glovoLink}
            className="block w-full text-center bg-red-700 text-white py-3 rounded-xl font-bold mt-4"
          >
            Order on Glovo
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-white leading-tight">CRAVINGS</span>
              <span className="text-xs tracking-widest text-orange-500 font-semibold uppercase">& MORE</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Serving the finest Nigerian flavors in the heart of Alimosho. Fast, delicious, and made fresh daily for your satisfaction.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <MapPin size={18} className="text-red-500" />
              Location
            </h4>
            <p className="text-sm leading-6">
              {BRAND.address}
            </p>
            <Link to="/contact" className="text-orange-500 text-sm mt-2 inline-flex items-center gap-1 hover:underline">
              Get Directions <ChevronRight size={14} />
            </Link>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Clock size={18} className="text-red-500" />
              Hours
            </h4>
            <p className="text-sm">Daily: 8:00 AM - 9:00 PM</p>
            <p className="text-sm mt-2">Dine-in | Drive-thru | Delivery</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Phone size={18} className="text-red-500" />
              Contact
            </h4>
            <a href={`tel:${BRAND.phone}`} className="text-lg font-bold text-white block mb-4">
              {BRAND.phone}
            </a>
            <div className="flex space-x-4">
              {/* Placeholders for Social Icons */}
              {['Facebook', 'Instagram', 'Twitter'].map(social => (
                <div key={social} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Cravings and More. All rights reserved. Built for professional quality.</p>
        </div>
      </div>
    </footer>
  );
};

// Global Sticky Mobile Button
const StickyOrderBtn = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-40">
      <a
        href={BRAND.glovoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-red-700 text-white w-full py-4 rounded-full font-bold shadow-2xl hover:bg-red-800 active:scale-95 transition-all"
      >
        <ShoppingBag size={20} />
        Order Now on Glovo
      </a>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyOrderBtn />
      </div>
    </Router>
  );
}
