// import HomeIcon from '@mui/icons-material/Home';
// import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
// import Client from '../../pages/Client';


const sidebarConfig = [
  {
    title: 'Home',
    path: '/',
    icon: 'HomeIcon',
  },
  {
    title: 'Clients',
    path: '/clients',
    // element: < Client />

  },
  {
    title: 'Partenaires',
    path: '/Parte',
    children: [
      { title: 'Add Assures', path: '/insured/add-assures' },
      { title: 'List Assures', path: '/insured/list-assures' },
      { title: 'Delete Assures', path: '/insured/delete-assures' },
    ],
    icon: PeopleIcon,
  },
  {
    title: 'Soubcriptor',
    path: '/addsoubscription',
    icon: PeopleIcon,
  },
  {
    title: 'Insured',
    path: '/insured',
    children: [
      { title: 'Add Assures', path: '/insured/add-assures' },
      { title: 'List Assures', path: '/insured/list-assures' },
      { title: 'Delete Assures', path: '/insured/delete-assures' },
    ],
    // element: < />
  },
  {
    title: 'Settings',
    path: '/settings',
    // icon: SettingsIcon,
  },
  // Add more menu items here
];

export default sidebarConfig;