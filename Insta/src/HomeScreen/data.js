const users = [
    { 
      id: 0, 
      source: require('../assets/story1.jpg'), 
      name: 'Seu Story' 
    },
    { 
      id: 1, 
      source: require('../assets/story2.jpg'), 
      name: 'Yune' 
    },
    { 
      id: 2, 
      source: require('../assets/story3.jpg'), 
      name: 'Nephi' 
    },
    { 
      id: 3, 
      source: require('../assets/story4.jpg'), 
      name: 'Aria' 
    }
  ]
  
  const postFeed = [
    { 
      id: 0, 
      source: require('../assets/post1.jpg'), 
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
      source: require('../assets/post3.jpg'), 
      profile: users[2].source, 
      name: users[3].source, 
      message: 'happy pride month!' 
    },
  ]

export default { users, postFeed }