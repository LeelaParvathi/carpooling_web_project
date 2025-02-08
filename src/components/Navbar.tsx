import React from 'react';
import { Car, MapPin, Clock, User } from 'lucide-react';

interface NavbarProps {
  currentPage: 'offer' | 'find' | 'history' | 'profile';
  onPageChange: (page: 'offer' | 'find' | 'history' | 'profile') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Car className="w-8 h-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">RideShare</span>
          </div>
          
          <div className="flex space-x-8">
            <button 
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'offer' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => onPageChange('offer')}
            >
              <Car className="w-5 h-5 mr-2" />
              Offer a Ride
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'find' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => onPageChange('find')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find a Ride
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'history' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => onPageChange('history')}
            >
              <Clock className="w-5 h-5 mr-2" />
              History
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'profile' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
              onClick={() => onPageChange('profile')}
            >
              <User className="w-5 h-5 mr-2" />
              Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;