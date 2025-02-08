import React from 'react';
import { Calendar, MapPin, Users, DollarSign, Car, Clock } from 'lucide-react';

const OfferRide: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Offer a Ride</h1>
        
        <form className="bg-green-800/50 rounded-xl shadow-lg p-8 border border-green-700/50 backdrop-blur-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <MapPin className="w-4 h-4 inline-block mr-1" />
                Departure Location
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
                Destination
              </label>
              <input
                type="text"
                placeholder="Enter city or address"
                className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-green-300/50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
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
                  <Clock className="w-4 h-4 inline-block mr-1" />
                  Time
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-green-100 mb-2">
                  <Users className="w-4 h-4 inline-block mr-1" />
                  Available Seats
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-100 mb-2">
                  <DollarSign className="w-4 h-4 inline-block mr-1" />
                  Price per Seat
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <Car className="w-4 h-4 inline-block mr-1" />
                Vehicle Details
              </label>
              <select className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white">
                <option value="">Select your vehicle</option>
                <option value="car1">Toyota Camry (ABC123)</option>
                <option value="car2">Honda Civic (XYZ789)</option>
                <option value="add">+ Add new vehicle</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                Additional Notes
              </label>
              <textarea
                rows={3}
                placeholder="Any special instructions or rules?"
                className="w-full px-4 py-3 bg-green-900/50 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-green-300/50"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-400 transition-colors mt-8 font-medium"
          >
            Publish Ride
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfferRide;