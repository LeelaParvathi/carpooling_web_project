import React from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const FindRide: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 min-h-screen p-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Find a Ride</h1>
        <div className="bg-green-800/50 p-8 rounded-xl shadow-lg border border-green-700/50 backdrop-blur-sm">
          <form className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <MapPin className="w-4 h-4 inline-block mr-1" />
                From
              </label>
              <input
                type="text"
                placeholder="Enter city or address"
                className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-green-300/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <MapPin className="w-4 h-4 inline-block mr-1" />
                To
              </label>
              <input
                type="text"
                placeholder="Enter city or address"
                className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-green-300/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <Calendar className="w-4 h-4 inline-block mr-1" />
                Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <Users className="w-4 h-4 inline-block mr-1" />
                Passengers
              </label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white"
              />
            </div>
          </form>
          <button className="mt-6 w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center font-medium">
            <Search className="w-5 h-5 mr-2" />
            Search Rides
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Available Rides</h2>
        {[1, 2, 3].map((ride) => (
          <div key={ride} className="bg-green-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-700/50 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">New York → Boston</h3>
                <p className="text-green-200">March 15, 2025 · 8:00 AM</p>
                <div className="flex items-center mt-2 text-green-200">
                  <Users className="w-4 h-4 mr-1" />
                  <span>3 seats available</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-green-300">$45</span>
                <p className="text-sm text-green-200">per seat</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-green-700/50">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Driver"
                  className="w-12 h-12 rounded-full ring-2 ring-green-600"
                />
                <div>
                  <p className="font-medium text-white">John Doe</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-green-200 text-sm ml-1">(4.8)</span>
                  </div>
                </div>
              </div>
              <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition-colors font-medium">
                Book Seat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindRide;