
import { Route, Routes } from 'react-router-dom';

// import ClientsPage from '../pages/ClientsPage';
// import HomePage from '../pages/HomePage';
import { Box, Toolbar } from '@mui/material';
import LoginPage from '../components/auth/LoginPage';
import RequireAuth from '../components/auth/RequireAuth';
import Sidebar from '../components/sidebar/Sidebar';
import Assures from '../pages/assurés/Assures';
import Classe from '../pages/Classe';
import Client from '../pages/Client';
import ExamplePage from '../pages/example/ExamplePage';
import HomePage from '../pages/home/HomePage';
import Settings from '../utils/Settings';

const AppRoutes = () => {
  return (
    <>


      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar /> {/* This ensures content is below the AppBar if you have one */}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<RequireAuth Component={HomePage} />} />

            <Route path="/clients" element={<Client />} />
            <Route path="/classes" element={<Classe />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/examplePage" element={<ExamplePage />} />
            <Route path="/insured" element={<Assures />} />

            {/* Add more Routes as needed */}
          </Routes>
        </Box>
      </Box>

    </>
  );
};

export default AppRoutes;