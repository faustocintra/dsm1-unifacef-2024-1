export const users = [
    { 
      id: 0, 
      source: require('../assets/story.jpg'), 
      name: 'Seu Story' 
    },
    { 
      id: 1, 
      source: require('../assets/pfp1.png'), 
      name: 'Yune' 
    },
    { 
      id: 2, 
      source: require('../assets/pfp2.png'), 
      name: 'Nephi' 
    },
    { 
      id: 3, 
      source: require('../assets/pfp3.png'), 
      name: 'Aria' 
    }
  ]
  
export const posts = [
  { 
    id: 0, 
    source: require('../assets/post1.png'), 
    profile: users[1].source, 
    name: users[1].name, 
    message: 'mrrow~' 
  },
  { 
    id: 1, 
    source: require('../assets/post2.jpg'), 
    profile: users[2].source, 
    name: users[2].name, 
    message: 'feeling silly today...' 
  },
  { 
    id: 2, 
    source: require('../assets/post3.gif'), 
    profile: users[3].source, 
    name: users[3].name, 
    message: 'happy pride month!' 
  },
]