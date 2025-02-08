import React from 'react';
import { User, Mail, Phone, Car, Shield, CreditCard } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-green-800/50 rounded-xl shadow-lg p-8 mb-8 border border-green-700/50 backdrop-blur-sm">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center space-x-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-24 h-24 rounded-full ring-4 ring-green-400 shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">John Doe</h1>
                <p className="text-green-200 mt-1">Member since March 2025</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="text-green-200 text-sm ml-2">(4.8)</span>
                </div>
              </div>
            </div>
            <button className="px-6 py-2 text-white border-2 border-green-400 rounded-lg hover:bg-green-700/50 transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Personal Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-700/50 rounded-lg flex items-center justify-center mr-4 border border-green-600/50">
                    <User className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="text-sm text-green-200">Full Name</p>
                    <p className="font-medium text-lg text-white">John Doe</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-700/50 rounded-lg flex items-center justify-center mr-4 border border-green-600/50">
                    <Mail className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="text-sm text-green-200">Email</p>
                    <p className="font-medium text-lg text-white">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-700/50 rounded-lg flex items-center justify-center mr-4 border border-green-600/50">
                    <Phone className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="text-sm text-green-200">Phone</p>
                    <p className="font-medium text-lg text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Verification Status</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-700/50 rounded-lg flex items-center justify-center mr-4 border border-green-600/50">
                    <Shield className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium text-lg text-white">Identity Verified</p>
                    <p className="text-sm text-green-200">Government ID verified</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-700/50 rounded-lg flex items-center justify-center mr-4 border border-green-600/50">
                    <Phone className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium text-lg text-white">Phone Verified</p>
                    <p className="text-sm text-green-200">Phone number confirmed</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-700/50 rounded-lg flex items-center justify-center mr-4 border border-green-600/50">
                    <Mail className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium text-lg text-white">Email Verified</p>
                    <p className="text-sm text-green-200">Email address confirmed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-800/50 rounded-xl shadow-lg p-6 border border-green-700/50 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-6">My Vehicles</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-700/50 rounded-lg border border-green-600/50">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-800/50 rounded-lg flex items-center justify-center mr-4 border border-green-600/50">
                    <Car className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Toyota Camry</p>
                    <p className="text-sm text-green-200">License: ABC123</p>
                  </div>
                </div>
                <button className="text-green-300 hover:text-green-200 font-medium">Edit</button>
              </div>
              <button className="w-full py-3 text-white border-2 border-green-400 rounded-lg hover:bg-green-700/50 transition-colors">
                Add New Vehicle
              </button>
            </div>
          </div>

          <div className="bg-green-800/50 rounded-xl shadow-lg p-6 border border-green-700/50 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-6">Payment Methods</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-700/50 rounded-lg border border-green-600/50">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-800/50 rounded-lg flex items-center justify-center mr-4 border border-green-600/50">
                    <CreditCard className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">•••• •••• •••• 4242</p>
                    <p className="text-sm text-green-200">Expires 12/25</p>
                  </div>
                </div>
                <button className="text-green-300 hover:text-green-200 font-medium">Edit</button>
              </div>
              <button className="w-full py-3 text-white border-2 border-green-400 rounded-lg hover:bg-green-700/50 transition-colors">
                Add Payment Method
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;