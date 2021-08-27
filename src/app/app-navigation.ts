export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home',
  },
  {
    text: 'Company',
    icon: 'fas fa-city',
    items: [
      { text: 'Create Company', path: '/create-company' },
      { text: 'Show Company', path: '/show-company' },
    ],
  },
  {
    text: 'Business',
    icon: 'fas fa-building',
    items: [
      {
        text: 'Create Business',
        path: '/create-business',
      },
      {
        text: 'List Business',
        path: '/list-business',
      },
    ],
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile',
      },
      {
        text: 'Tasks',
        path: '/tasks',
      },
    ],
  },
];
