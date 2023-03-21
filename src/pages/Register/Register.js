import styles from './Register.module.css';

export default function Register() {
  return (
    <>
      <form className={styles.registerForm}>
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
