import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = isLoggedIn === true && isRefreshing === false;

  return shouldRedirect ? component : <Navigate to={redirectTo} />;
};
