import React, { useState } from 'react';
import { Car } from 'lucide-react';
import AuthModal from './components/AuthModal';
import Navbar from './components/Navbar';
import OfferRide from './pages/OfferRide';
import FindRide from './pages/FindRide';
import RideHistory from './pages/RideHistory';
import UserProfile from './pages/UserProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [currentPage, setCurrentPage] = useState<'offer' | 'find' | 'history' | 'profile'>('find');

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'offer':
        return <OfferRide />;
      case 'find':
        return <FindRide />;
      case 'history':
        return <RideHistory />;
      case 'profile':
        return <UserProfile />;
    }
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen hero-pattern">
        <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderPage()}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-pattern">
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Car className="w-8 h-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">RideShare</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleAuthClick('login')}
                className="px-4 py-2 text-green-600 hover:text-green-800 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => handleAuthClick('signup')}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors btn-hover-effect"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Share Rides, Save Money, Reduce Carbon Footprint
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community of riders and drivers to make travel more affordable,
            sustainable, and social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Offer or Find Rides</h3>
            <p className="text-gray-600">Connect with drivers and passengers going your way</p>
          </div>
          <div className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
            <p className="text-gray-600">Track your ride in real-time for safety and convenience</p>
          </div>
          <div className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Hassle-free and secure in-app payments</p>
          </div>
          <div className="glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Verified Users</h3>
            <p className="text-gray-600">Travel with confidence with our verified community</p>
          </div>
        </div>
      </main>

      {showAuthModal && (
        <AuthModal
          type={authType}
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => {
            setIsLoggedIn(true);
            setShowAuthModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;