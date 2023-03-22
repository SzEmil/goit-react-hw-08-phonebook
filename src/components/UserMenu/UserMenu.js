import { useDispatch } from 'react-redux';
import { signOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUserEmail, selectIsLoggedIn } from 'redux/auth/selectors';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(signOut());
  };
  const userMail = useSelector(selectUserEmail);
  const logedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <p>{logedIn ? <span>{userMail}</span> : <span>No user loged</span>}</p>
      <button type="button" onClick={handleOnClick}>
        Logout
      </button>
    </div>
  );
};
