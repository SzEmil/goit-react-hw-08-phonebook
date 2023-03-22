import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
export const SharedLayout = () => {
  return (
    <>
      <div>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* <button type="button" onClick={navigate('/')}>
            GO BACK
          </button> */}
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/contacts">CONTACTS</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
          <UserMenu />
        </nav>
        <Suspense fallback={<div>Loading components...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
