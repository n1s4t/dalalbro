import React from 'react';
import { Post as PostType } from '../types';
import Post from './Post';

interface FeedProps {
  posts: PostType[];
  onLike: (postId: string) => void;
}

const Feed: React.FC<FeedProps> = ({ posts, onLike }) => {
  return (
    <div className="max-w-md mx-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
};

export default Feed;