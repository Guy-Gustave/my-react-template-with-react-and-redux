import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Settings from "../../utils/Settings";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          我的应用程序
        </Typography>
        <Button color="inherit">Login</Button>
        <Box ml={2}>
          <Settings /> {/* This will include the LanguageSwitcher */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar