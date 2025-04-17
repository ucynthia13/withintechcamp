'use client'

import { useState } from 'react';
import Navbar from '../components/site-components/Navbar';
import Footer from '../components/site-components/Footer';

export default function Donate() {
  const [donationType, setDonationType] = useState('one-time');

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[80vh] bg-black">
          <img 
            src="/images/heromain.jpg" 
            alt="Donate Hero" 
            className="absolute inset-0 object-cover w-full h-full opacity-50" 
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white text-center text-3xl md:text-5xl font-semibold uppercase leading-tight">
              Donate to <br />
              <span className="font-bold">Get Into Tech Summer Camp Cohort 2</span>
            </h1>
          </div>
        </div>

        {/* Donation Form */}
        <div className="flex justify-center px-4 py-12">
          <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-md">
            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-gray-300 pb-2">
              {['one-time', 'monthly'].map((type) => (
                <button
                  key={type}
                  onClick={() => setDonationType(type)}
                  className={`font-medium capitalize ${
                    donationType === type
                      ? 'text-purple-600 border-b-2 border-purple-600'
                      : 'text-gray-500'
                  }`}
                >
                  {type === 'one-time' ? 'One-time' : 'Monthly'}
                </button>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full border rounded-md px-4 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full border rounded-md px-4 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Keep up the good work!"
                  className="w-full border rounded-md px-4 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Amount</label>
                <input
                  type="text"
                  placeholder="$20"
                  className="w-full border rounded-md px-4 py-2 mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2 font-medium transition"
              >
                Donate
              </button>
            </form>

            <p className="text-xs text-center mt-6 text-gray-500">
              Get Into Tech Summer Camp is proudly supported by @Rwanda Information Society Authority (RISA),
              an institution committed to fostering digital innovation and empowering youth through technology.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
