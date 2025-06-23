import React from 'react';
import { Story } from '../types';

interface StoriesProps {
  stories: Story[];
  currentUserAvatar: string;
}

const Stories: React.FC<StoriesProps> = ({ stories, currentUserAvatar }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {/* Your Story */}
        <div className="flex flex-col items-center space-y-2 flex-shrink-0">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 p-0.5">
              <img
                src={currentUserAvatar}
                alt="Your story"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>
          <span className="text-xs text-gray-700 font-medium">Your story</span>
        </div>

        {/* Friends' Stories */}
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className={`w-16 h-16 rounded-full p-0.5 ${
              story.viewed 
                ? 'bg-gradient-to-br from-gray-300 to-gray-400' 
                : 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600'
            }`}>
              <div className="w-full h-full rounded-full bg-white p-0.5">
                <img
                  src={story.user.avatar}
                  alt={`${story.user.username}'s story`}
                  className="w-full h-full rounded-full object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
            <span className="text-xs text-gray-700 max-w-[60px] truncate">
              {story.user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;