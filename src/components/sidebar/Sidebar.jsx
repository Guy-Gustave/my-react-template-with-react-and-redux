
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import sidebarConfig from './sidebarConfig';

const drawerWidth = 240;

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClick = (index) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [index]: !prevOpenMenus[index],
    }));
  };

  return (
    <div >
      <IconButton onClick={toggleDrawer} style={{ marginLeft: open ? drawerWidth : 0 }}>
        <MenuIcon />
      </IconButton>

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
            <div key={index}>
              {item.children ? (
                <div>
                  <ListItemButton onClick={() => handleClick(index)}>
                    <ListItemText primary={item.title} />
                    {openMenus[index] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openMenus[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child, childIndex) => (
                        <ListItemButton
                          key={childIndex}
                          component={Link}
                          to={child.path}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={child.title} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </div>
              ) : (
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;