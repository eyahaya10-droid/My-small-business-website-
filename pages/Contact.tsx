
import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, Send, MessageSquare } from 'lucide-react';
import { BRAND } from '../constants';

const Contact = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-gray-900 py-24 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Have a question or want to place a large order? We're here to help.</p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-orange-50 h-full">
              <h2 className="text-3xl font-bold mb-10">Visit Us</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-red-700 flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Location</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {BRAND.address}
                    </p>
                    <a 
                      href={BRAND.locationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 font-bold text-sm mt-3 inline-flex items-center gap-1 hover:underline"
                    >
                      Open in Maps <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-red-700 flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Call Us</h4>
                    <a href={`tel:${BRAND.phone}`} className="text-2xl font-black text-gray-900 block">
                      {BRAND.phone}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Available daily for orders & inquiries</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-red-700 flex-shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Opening Hours</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Open Daily: 8:00 AM — 9:00 PM
                    </p>
                    <div className="flex gap-2 mt-4">
                      {['Dine-in', 'Drive-thru', 'Delivery'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / Map Integration */}
          <div className="lg:col-span-2 space-y-10">
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-[450px] rounded-[3rem] overflow-hidden shadow-xl relative group">
              <img 
                src="https://picsum.photos/seed/map/1200/600" 
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-[2s]" 
                alt="Map Location"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href={BRAND.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:bg-red-800 transition-all scale-110"
                >
                  <MapPin size={20} />
                  View Exact Location
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-orange-50">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white">
                  <MessageSquare size={24} />
                </div>
                <h2 className="text-3xl font-bold">Quick Inquiry</h2>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-orange-50/50 border-none px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-red-700/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="0900 000 0000"
                    className="w-full bg-orange-50/50 border-none px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-red-700/20"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your inquiry or catering request..."
                    className="w-full bg-orange-50/50 border-none px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-red-700/20 resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="w-full md:w-auto bg-red-700 text-white px-12 py-5 rounded-full font-bold shadow-xl hover:bg-red-800 transition-all flex items-center justify-center gap-3"
                  >
                    Send Message <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Extra */}
      <div className="fixed bottom-24 right-6 md:right-10 z-40">
        <a 
          href={`https://wa.me/${BRAND.phone.replace(/\s/g, '')}`} 
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
        >
          <div className="w-8 h-8 bg-white/20 rounded-lg animate-pulse absolute"></div>
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute -top-12 right-0 bg-white text-gray-900 text-xs font-bold py-2 px-4 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Chat with us</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
