import styles from './Login.module.css';

export default function Login() {
  return (
    <>
      <form className={styles.loginForm}>
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
    </>
  );
};
