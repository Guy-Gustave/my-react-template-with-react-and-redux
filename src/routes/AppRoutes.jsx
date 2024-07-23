import { Route, Routes } from 'react-router-dom';
// import ClientsPage from '../pages/ClientsPage';
// import HomePage from '../pages/HomePage';
import Client from '../pages/client';
import HomePage from '../pages/home/HomePage';

const AppRoutes = () => {
  return (
    <>


      <Routes>
        <Route exact path="/" component={<HomePage />} />
        <Route path="/clients" component={<Client />} />
        {/* Add more routes as needed */}
      </Routes>

    </>
  );
};

export default AppRoutes;