import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
// import sidebarConfig from '../config/sidebarConfig';
import './Sidebar.css'; // Add your styles here
import sidebarConfig from './sidebarConfig';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <List>
        {sidebarConfig.map((item, index) => (
          <ListItemButton key={index} component={Link} to={item.path}>

            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;