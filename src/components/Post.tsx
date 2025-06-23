import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
  onLike: (postId: string) => void;
}

const Post: React.FC<PostProps> = ({ post, onLike }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    onLike(post.id);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, this would add the comment to the backend
      console.log('Adding comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-sm">{post.user.username}</span>
              {post.user.isVerified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500">{post.timestamp}</span>
          </div>
        </div>
        <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative group">
        <img
          src={post.image}
          alt="Post content"
          className="w-full aspect-square object-cover"
        />
        <button
          onClick={handleLike}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Heart 
            size={60} 
            className={`text-white drop-shadow-lg transition-transform duration-200 ${
              post.liked ? 'fill-red-500 text-red-500 scale-110' : 'hover:scale-110'
            }`} 
          />
        </button>
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLike}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Heart 
                size={24} 
                className={`${post.liked ? 'fill-red-500 text-red-500' : 'hover:text-gray-600'}`} 
              />
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="hover:scale-110 transition-transform duration-200 hover:text-gray-600"
            >
              <MessageCircle size={24} />
            </button>
            <button className="hover:scale-110 transition-transform duration-200 hover:text-gray-600">
              <Send size={24} />
            </button>
          </div>
          <button className="hover:scale-110 transition-transform duration-200 hover:text-gray-600">
            <Bookmark size={24} />
          </button>
        </div>

        {/* Likes Count */}
        <div className="mb-2">
          <span className="font-semibold text-sm">{post.likes.toLocaleString()} likes</span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{post.user.username}</span>
          <span className="text-sm">{post.caption}</span>
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="mb-2">
            {!showComments ? (
              <button 
                onClick={() => setShowComments(true)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                View all {post.comments.length} comments
              </button>
            ) : (
              <div className="space-y-1">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-2">
                    <img
                      src={comment.user.avatar}
                      alt={comment.user.username}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-sm mr-2">{comment.user.username}</span>
                      <span className="text-sm">{comment.text}</span>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                        <button className="text-xs text-gray-500 hover:text-gray-700">
                          {comment.likes} likes
                        </button>
                        <button className="text-xs text-gray-500 hover:text-gray-700">
                          Reply
                        </button>
                      </div>
                    </div>
                    <button className="hover:text-red-500 transition-colors">
                      <Heart size={12} />
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => setShowComments(false)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Hide comments
                </button>
              </div>
            )}
          </div>
        )}

        {/* Add Comment */}
        <form onSubmit={handleAddComment} className="flex items-center space-x-3 pt-3 border-t border-gray-100">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 text-sm outline-none placeholder-gray-400"
          />
          {newComment.trim() && (
            <button
              type="submit"
              className="text-sm font-semibold text-blue-500 hover:text-blue-600"
            >
              Post
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Post;