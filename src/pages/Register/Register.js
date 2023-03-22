import styles from './Register.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <label htmlFor="email">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.inputField}
          required
        />
        <label htmlFor="password">Email:</label>
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
          Register
        </button>
      </form>
    </>
  );
}
