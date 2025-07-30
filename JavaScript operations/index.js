const users = [
  {
    id: 1,
    name: 'alice smith',
    age: 25,
    roles: ['admin', 'user'],
    profile: {
      location: 'NY',
      active: true,
      preferences: { notifications: true, darkMode: false },
    },
    friends: [2, 3],
  },
  {
    id: 2,
    name: 'bob johnson',
    age: 30,
    roles: ['user'],
    profile: {
      location: 'LA',
      active: false,
      preferences: { notifications: false, darkMode: true },
    },
    friends: [1],
  },
  {
    id: 3,
    name: 'charlie brown',
    age: 35,
    roles: ['user', 'moderator'],
    profile: {
      location: 'SF',
      active: true,
      preferences: { notifications: false, darkMode: true },
    },
    friends: [1, 4],
  },
  {
    id: 4,
    name: 'david white',
    age: 40,
    roles: ['guest'],
    profile: {
      location: 'TX',
      active: false,
      preferences: { notifications: true, darkMode: false },
    },
    friends: [3],
  },
];


 // Deep Clone the input array users into a new updatedUsers such that modifying updatedUsers will not affect the original users.
  const updatedUsers = JSON.parse(JSON.stringify(users));
  // console.log("updatedUsers", updatedUsers);

  // Question2
  // Increment the age of each user in by 2 if the user has the role "admin"& by 1 for all other users.

  updatedUsers.map((item) => {
    item.age += item.roles.includes("admin") ? 2 : 1;
  });

// Answer 3 :
