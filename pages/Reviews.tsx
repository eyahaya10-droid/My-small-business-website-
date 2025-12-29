
import React from 'react';
import { Star, MessageCircle, ThumbsUp, CheckCircle } from 'lucide-react';
import { BRAND, REVIEWS } from '../constants';

const Reviews = () => {
  return (
    <div className="min-h-screen bg-orange-50/30 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">What Our Guests Say</h1>
          
          {/* Rating Summary Card */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-red-100 border border-orange-100 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="text-center">
              <div className="text-7xl font-black text-red-700">{BRAND.googleRating}</div>
              <div className="flex gap-1 justify-center my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill={i < Math.floor(BRAND.googleRating) ? "#B91C1C" : "transparent"} className="text-red-700" />
                ))}
              </div>
              <p className="text-gray-500 font-medium">Based on {BRAND.reviewCount}+ Reviews</p>
            </div>
            
            <div className="h-px w-24 bg-gray-100 md:h-24 md:w-px hidden md:block"></div>
            
            <div className="space-y-3 w-full max-w-xs">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-600 w-4">{star}</span>
                  <div className="flex-grow h-3 bg-orange-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-700 rounded-full" 
                      style={{ width: star === 5 ? '75%' : star === 4 ? '15%' : '5%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Reviews List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 gap-10">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-[3rem] shadow-sm border border-orange-50 hover:shadow-lg transition-all relative">
              <CheckCircle className="absolute top-10 right-10 text-green-500" size={24} />
              
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-700 to-orange-500 flex items-center justify-center text-white text-2xl font-black">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{review.author}</h4>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "#B91C1C" : "transparent"} className="text-red-700" />
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-sm text-gray-400 font-medium">
                  {review.date}
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "{review.text}"
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-6">
                <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-red-700 transition-colors">
                  <ThumbsUp size={16} /> Helpful
                </button>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-red-700 transition-colors">
                  <MessageCircle size={16} /> Reply
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center space-y-8">
          <p className="text-gray-500 max-w-md mx-auto">
            Your feedback helps us improve our meals and service. Thank you for being part of our story!
          </p>
          <a 
            href="https://www.google.com/search?q=Cravings+and+More+Lagos+Reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-10 py-4 rounded-full font-bold transition-all shadow-md"
          >
            Read All Google Reviews
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
