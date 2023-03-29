import { useDispatch } from 'react-redux';
import { signOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUserEmail, selectIsLoggedIn } from 'redux/auth/selectors';
import { FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(signOut());
  };
  const userMail = useSelector(selectUserEmail);
  const logedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.userMenu}>
      <p>
        {logedIn ? (
          <div className={css.linkBox}>
            <FaUserAlt size={'18px'} />
            <span className={css.link}>{userMail}</span>
          </div>
        ) : (
          <div className={css.linkBox}>
            <FaUserAltSlash size={'18px'} />
            <span className={css.link}>No user loged</span>
          </div>
        )}
      </p>
      {logedIn ? (
        <button className={css.button} type="button" onClick={handleOnClick}>
          Logout
        </button>
      ) : null}
    </div>
  );
};
