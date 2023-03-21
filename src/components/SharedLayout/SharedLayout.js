import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
export const SharedLayout = () => {
  return (
    <>
      <div>
        <nav>
          {/* <button type="button" onClick={navigate('/')}>
            GO BACK
          </button> */}
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/contacts">CONTACTS</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
        </nav>
        <Suspense fallback={<div>Loading components...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
