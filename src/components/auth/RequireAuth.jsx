import PropTypes from 'prop-types'; // Import PropTypes
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ Component }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

// Add prop type validation
RequireAuth.propTypes = {
  Component: PropTypes.elementType.isRequired, // Require Component prop to be a valid React component
};

export default RequireAuth;