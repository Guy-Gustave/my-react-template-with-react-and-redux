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
    title: 'Classe',
    path: '/classes',
    icon: PeopleIcon,
  },
  {
    title: 'Insured',
    path: '/insured',
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