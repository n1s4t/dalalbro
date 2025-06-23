import { User, Post, Story } from '../types';

export const currentUser: User = {
  id: 'current-user',
  username: 'john_doe',
  fullName: 'John Doe',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  followers: 1250,
  following: 843,
  posts: 127
};

export const users: User[] = [
  {
    id: '1',
    username: 'sarah_wilson',
    fullName: 'Sarah Wilson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    isVerified: true,
    followers: 2450,
    following: 623,
    posts: 89
  },
  {
    id: '2',
    username: 'mike_photographer',
    fullName: 'Mike Johnson',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    followers: 5230,
    following: 1200,
    posts: 234
  },
  {
    id: '3',
    username: 'emma_travels',
    fullName: 'Emma Rodriguez',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    isVerified: true,
    followers: 8760,
    following: 890,
    posts: 156
  },
  {
    id: '4',
    username: 'alex_fitness',
    fullName: 'Alex Thompson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    followers: 3420,
    following: 567,
    posts: 198
  }
];

export const stories: Story[] = [
  {
    id: '1',
    user: users[0],
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
    viewed: false
  },
  {
    id: '2',
    user: users[1],
    image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400',
    viewed: true
  },
  {
    id: '3',
    user: users[2],
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400',
    viewed: false
  },
  {
    id: '4',
    user: users[3],
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
    viewed: true
  }
];

export const posts: Post[] = [
  {
    id: '1',
    user: users[0],
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Beautiful sunset at the beach 🌅 #nature #sunset #photography',
    likes: 247,
    comments: [
      {
        id: '1',
        user: users[1],
        text: 'Absolutely stunning! 😍',
        timestamp: '2h',
        likes: 12
      },
      {
        id: '2',
        user: users[2],
        text: 'Where is this? Looks amazing!',
        timestamp: '1h',
        likes: 8
      }
    ],
    timestamp: '3h',
    liked: false
  },
  {
    id: '2',
    user: users[1],
    image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'New equipment day! Ready for some serious photography 📸 #photography #camera #newgear',
    likes: 389,
    comments: [
      {
        id: '3',
        user: users[0],
        text: 'Nice setup! What lens is that?',
        timestamp: '30m',
        likes: 5
      }
    ],
    timestamp: '5h',
    liked: true
  },
  {
    id: '3',
    user: users[2],
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Mountain adventures never get old ⛰️ #travel #mountains #adventure #hiking',
    likes: 512,
    comments: [
      {
        id: '4',
        user: users[3],
        text: 'This looks incredible! Adding to my bucket list',
        timestamp: '45m',
        likes: 3
      },
      {
        id: '5',
        user: users[0],
        text: 'Which mountain is this?',
        timestamp: '20m',
        likes: 2
      }
    ],
    timestamp: '8h',
    liked: true
  },
  {
    id: '4',
    user: users[3],
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Morning workout complete! 💪 Starting the day right #fitness #motivation #morningworkout',
    likes: 156,
    comments: [],
    timestamp: '12h',
    liked: false
  }
];