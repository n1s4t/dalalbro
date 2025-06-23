import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  userAvatar: string;
  username: string;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, userAvatar, username }) => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImageSelect = () => {
    // Simulate image selection with a placeholder
    const placeholderImages = [
      'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600'
    ];
    const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
    setSelectedImage(randomImage);
  };

  const handlePost = () => {
    if (selectedImage && caption.trim()) {
      // In a real app, this would upload the post to the backend
      console.log('Creating post:', { image: selectedImage, caption });
      onClose();
      setCaption('');
      setSelectedImage(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Create new post</h2>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Image Selection */}
          {!selectedImage ? (
            <div 
              onClick={handleImageSelect}
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-gray-400 transition-colors"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <ImageIcon size={24} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-lg font-medium">Select photos and videos</p>
                  <p className="text-sm text-gray-500">Drag photos and videos here</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Select from computer
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Selected Image */}
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* User Info and Caption */}
              <div className="flex space-x-3">
                <img
                  src={userAvatar}
                  alt={username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-2">{username}</p>
                  <textarea
                    placeholder="Write a caption..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full resize-none outline-none text-sm"
                    rows={3}
                  />
                  <div className="text-xs text-gray-400 mt-2">
                    {caption.length}/2,200
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {selectedImage && (
          <div className="border-t border-gray-200 p-4">
            <button
              onClick={handlePost}
              disabled={!caption.trim()}
              className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                caption.trim()
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Share
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostModal;