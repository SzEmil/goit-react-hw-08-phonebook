import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './SharedLayout.module.css';
import { FaHome, FaUserSecret } from 'react-icons/fa';
import { useAuth } from 'hooks/useAuth';
import Notiflix from 'notiflix';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  const handleLinkClicked = () => {
    if (!isLoggedIn) {
      Notiflix.Notify.failure('Please login or rigester, acces denied!');
    }
  };
  return (
    <>
      <div className={css.container}>
        <nav className={css.navigation}>
          {/* <button type="button" onClick={navigate('/')}>
            GO BACK
          </button> */}
          <NavLink
            className={({ isActive }) =>
              isActive ? css.navLinkActive : css.navLinkOff
            }
            to="/"
          >
            <FaHome size={'18px'} className={css.icon} />
            <span className={css.linkText}>HOME</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.navLinkActive : css.navLinkOff
            }
            to="/contacts"
            onClick={handleLinkClicked}
          >
            <FaUserSecret />
            <span className={css.linkText}>PANEL</span>
          </NavLink>
          {isLoggedIn ? null : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.navLinkActive : css.navLinkOff
                }
                to="/login"
              >
                <span className={css.linkText}>LOGIN</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.navLinkActive : css.navLinkOff
                }
                to="/register"
              >
                <span className={css.linkText}>REGISTER</span>
              </NavLink>
            </>
          )}
          <UserMenu />
        </nav>
        <Suspense fallback={<div>Loading components...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
