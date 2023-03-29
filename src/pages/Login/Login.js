import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';
export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      signIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.inputField}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.inputField}
          required
        />

        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
}
