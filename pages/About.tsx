
import React from 'react';
import { Utensils, Award, Users, Heart } from 'lucide-react';
import { BRAND } from '../constants';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50k+', icon: <Users className="text-orange-500" /> },
    { label: 'Menu Specialties', value: '40+', icon: <Utensils className="text-red-700" /> },
    { label: 'Google Rating', value: '4.3/5', icon: <Award className="text-orange-500" /> },
    { label: 'Love & Care', value: '100%', icon: <Heart className="text-red-700" /> },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/restaurant/1920/800" 
            className="w-full h-full object-cover brightness-[0.3]" 
            alt="Inside Cravings and More"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            More than just a restaurant, we are a community of food lovers dedicated to bringing the authentic taste of Nigeria to your table.
          </p>
        </div>
      </header>

      {/* Main Story Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">Founded on Quality, Consistency & Convenience.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Established in the heart of Alimosho, {BRAND.name} began with a simple mission: to provide high-quality, delicious Nigerian fast food that doesn't compromise on traditional flavor.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our popularity in the Alimosho and Agege area stems from our commitment to using the freshest ingredients. Whether it's our signature Basmati Jollof Rice with Snail or our crowd-pleasing Stir-Fried Spaghetti, every dish is prepared with the same passion and precision.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-red-700">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-black text-gray-900">{stat.value}</h4>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-200/50 rounded-full blur-3xl -z-10"></div>
          <img 
            src="https://picsum.photos/seed/chef/800/1000" 
            className="rounded-[3rem] shadow-2xl w-full h-[600px] object-cover" 
            alt="Chef Preparing Food"
          />
          <div className="absolute bottom-12 -left-12 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
            <p className="text-gray-800 font-medium italic">
              "We believe that everyone deserves a premium dining experience, even on the go."
            </p>
            <p className="text-red-700 font-bold mt-4">— The Cravings Team</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">The principles that guide every meal we serve.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Quality First", desc: "We select only the finest produce and meats, ensuring every bite is packed with authentic flavor and nutrients." },
              { title: "Service with a Smile", desc: "Our staff is trained to provide a welcoming atmosphere, whether you're dining in or just passing through our drive-through." },
              { title: "Accessibility", desc: "Great food should be accessible. We pride ourselves on offering affordable prices for premium meals." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="inline-block px-4 py-1 rounded-full bg-red-700/20 text-red-400 font-bold text-xs uppercase tracking-widest mb-4">Value 0{i+1}</div>
                <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
