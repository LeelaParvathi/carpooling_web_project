import React from 'react';
import { Calendar, MapPin, DollarSign } from 'lucide-react';

const RideHistory: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Ride History</h1>
      
      <div className="space-y-6">
        <div className="flex space-x-4 mb-8">
          <button className="px-6 py-2 text-green-100 bg-green-500 rounded-lg font-medium shadow-sm hover:bg-green-400 transition-all">
            All Rides
          </button>
          <button className="px-6 py-2 text-green-200 hover:text-white hover:bg-green-500 rounded-lg font-medium shadow-sm hover:shadow-md transition-all">
            As Driver
          </button>
          <button className="px-6 py-2 text-green-200 hover:text-white hover:bg-green-500 rounded-lg font-medium shadow-sm hover:shadow-md transition-all">
            As Passenger
          </button>
        </div>

        {[1, 2, 3].map((ride) => (
          <div key={ride} className="bg-green-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-700/50 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-3 bg-green-700/50 p-2 rounded-lg w-fit border border-green-600/50">
                  <Calendar className="w-5 h-5 text-green-300 mr-2" />
                  <span className="text-green-100 font-medium">March 1, 2025 · 9:00 AM</span>
                </div>
                <div className="space-y-3 bg-green-700/30 p-4 rounded-lg border border-green-600/50">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-300 mr-2 mt-1" />
                    <div className="flex-1">
                      <div className="bg-green-800/50 p-3 rounded-lg shadow-sm mb-2 border border-green-600/50">
                        <p className="font-medium text-lg text-green-100">New York, NY</p>
                      </div>
                      <div className="h-14 border-l-2 border-dashed border-green-500 ml-2 my-2 relative">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-700/50 rounded-full flex items-center justify-center border border-green-500">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-green-800/50 p-3 rounded-lg shadow-sm border border-green-600/50">
                        <p className="font-medium text-lg text-green-100">Boston, MA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right ml-6">
                <div className="flex items-center justify-end mb-3 bg-green-700/50 p-3 rounded-lg border border-green-600/50">
                  <DollarSign className="w-6 h-6 text-green-300" />
                  <span className="text-2xl font-bold text-green-100 ml-1">$45</span>
                </div>
                <span className="inline-block px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium shadow-sm">
                  Completed
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-green-600/50">
              <div className="flex items-center space-x-4 bg-green-700/50 p-3 rounded-lg border border-green-600/50">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Driver"
                  className="w-12 h-12 rounded-full ring-2 ring-green-400 shadow-md"
                />
                <div>
                  <p className="font-medium text-green-100">John Doe</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-green-200 text-sm ml-1">(4.8)</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-200 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideHistory;