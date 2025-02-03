import { useAuth } from "../../../../components/hooks/useAuthContext";
import styles from "./Auth.module.css";

const Auth = () => {
  const { signIn, signOut } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    let result = await signIn(email.value, password.value);
    console.log(result);
  };

  return (
    <div className={styles.contactForm}>
      <div className={styles.loginDiv}>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type='text'
              name='email'
              defaultValue='admin@mediacollege.dk'></input>
          </label>
          <label>
            Password
            <input type='text' name='password' defaultValue='admin'></input>
          </label>
          <button type='submit'>Log ind</button>
          {/* <button type='button' onClick={() => signOut()}>
            Log ud
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Auth;
