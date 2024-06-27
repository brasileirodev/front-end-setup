import { Navigate, Outlet } from 'react-router-dom';
import sessionStore from '../store/store';

const PrivateRoute = () => {
  if (!sessionStore.logged) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" />;
  }

  // authorized so return child components
  return <Outlet />;
};
export default PrivateRoute;
