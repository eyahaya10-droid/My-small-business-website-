
import React, { useState } from 'react';
// Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Filter } from 'lucide-react';
import { MENU_ITEMS, BRAND } from '../constants';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Rice Dishes', 'Protein & Sides', 'Swallows & Soups', 'Specials'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Menu Header */}
      <header className="bg-red-700 py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">Our Menu</h1>
          <p className="text-xl text-red-100 font-light">Explore our wide variety of authentic Nigerian fast food options.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-4 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between border border-orange-50">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-red-700 text-white shadow-lg shadow-red-200 scale-105' 
                    : 'bg-orange-50 text-gray-600 hover:bg-orange-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search dishes..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-red-700/20 outline-none text-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-orange-50 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-600 uppercase tracking-widest shadow-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-red-700 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-black text-red-700">₦{item.price.toLocaleString()}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">
                  {item.description}
                </p>
                
                <a 
                  href={BRAND.glovoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-orange-500 text-white py-4 rounded-2xl font-bold hover:bg-orange-600 hover:shadow-lg transition-all"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24">
            <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-200">
              <Filter size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">No dishes found in this category</h3>
            <p className="text-gray-500 mt-2">Try selecting another category or clear your search.</p>
          </div>
        )}
      </div>

      {/* Featured Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <h2 className="text-white text-3xl md:text-5xl font-bold">Having a party?</h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">We offer bulk catering services for weddings, corporate events, and family gatherings. Let us spice up your special day.</p>
           <Link to="/contact" className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all">
             Inquire About Catering
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
