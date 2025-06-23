import React from 'react';
import { X, Settings, Grid, Bookmark, UserPlus } from 'lucide-react';
import { User } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">{user.fullName}</h2>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture */}
            <div className="flex justify-center md:justify-start">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <h1 className="text-2xl font-light">{user.username}</h1>
                  {user.isVerified && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-blue-500 text-white px-6 py-1.5 rounded-md font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2">
                    <UserPlus size={16} />
                    <span>Follow</span>
                  </button>
                  <button className="border border-gray-300 px-6 py-1.5 rounded-md font-semibold hover:bg-gray-50 transition-colors">
                    Message
                  </button>
                  <button className="hover:bg-gray-100 p-2 rounded-md transition-colors">
                    <Settings size={16} />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-center md:justify-start space-x-8 mb-6">
                <div className="text-center">
                  <div className="font-semibold text-lg">{user.posts}</div>
                  <div className="text-gray-600 text-sm">posts</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{user.followers.toLocaleString()}</div>
                  <div className="text-gray-600 text-sm">followers</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{user.following.toLocaleString()}</div>
                  <div className="text-gray-600 text-sm">following</div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h2 className="font-semibold mb-1">{user.fullName}</h2>
                <p className="text-gray-600">
                  📸 Photography enthusiast | 🌍 Travel lover | ✨ Capturing moments
                </p>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="border-t border-gray-200 mt-8 pt-6">
            <div className="flex justify-center space-x-12 mb-6">
              <button className="flex items-center space-x-2 text-gray-900 border-t-2 border-gray-900 pt-4">
                <Grid size={16} />
                <span className="text-sm font-medium">POSTS</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 pt-4">
                <Bookmark size={16} />
                <span className="text-sm font-medium">SAVED</span>
              </button>
            </div>

            {/* Post Grid Placeholder */}
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-200 rounded-sm hover:opacity-75 transition-opacity cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;