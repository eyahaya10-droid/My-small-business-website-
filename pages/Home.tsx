
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Utensils, Zap, ArrowRight, Quote } from 'lucide-react';
import { BRAND, MENU_ITEMS, REVIEWS } from '../constants';

const Home = () => {
  const featured = MENU_ITEMS.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/hero-food/1920/1080"
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Delicious Nigerian Food"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 animate-fade-in">
            <Star className="text-yellow-400" fill="currentColor" size={16} />
            <span className="text-sm font-semibold">{BRAND.googleRating} Google Rating ({BRAND.reviewCount}+ Reviews)</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-[1.1]">
            {BRAND.tagline.split('—').map((part, i) => (
              <span key={i} className="block last:text-orange-400">
                {part}{i === 0 ? ' —' : ''}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light">
            Experience the authentic taste of Lagos. Fast, delicious meals made fresh daily with premium ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={BRAND.glovoLink}
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Order Now <ArrowRight size={20} />
            </a>
            <Link
              to="/menu"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all text-center"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Utensils className="text-red-700" size={32} />, title: "Dine-in", desc: "Enjoy your meal in our warm, comfortable restaurant space." },
            { icon: <Zap className="text-orange-500" size={32} />, title: "Drive-through", desc: "Quick and efficient service for those on the move." },
            { icon: <Truck className="text-red-700" size={32} />, title: "Home Delivery", desc: "Get your favorites delivered to your doorstep via Glovo." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-all">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Menu */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Chef's Recommendations</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Our most-loved dishes, crafted with traditional recipes and a modern twist.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featured.map((item) => (
              <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-orange-50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-red-700 font-bold shadow-md">
                    ₦{item.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-700 transition-colors">{item.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link to="/menu" className="text-orange-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Order Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="inline-block border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-10 py-4 rounded-full font-bold transition-all"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <Quote className="absolute top-10 right-10 text-white/10 w-48 h-48 -rotate-12" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {REVIEWS.slice(0, 2).map((rev) => (
                <div key={rev.id} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < rev.rating ? "white" : "transparent"} className="text-white" />
                    ))}
                  </div>
                  <p className="text-white text-lg italic mb-6 leading-relaxed">"{rev.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center font-bold text-red-700">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{rev.author}</h4>
                      <p className="text-white/60 text-sm">{rev.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">Hungry? We've Got You Covered.</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Skip the queue and order your favorites directly from Glovo. Fast delivery, fresh food.
        </p>
        <a
          href={BRAND.glovoLink}
          className="inline-flex items-center gap-3 bg-red-700 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-red-800 transition-all shadow-xl"
        >
          Order Now on Glovo
        </a>
      </section>
    </div>
  );
};

export default Home;
