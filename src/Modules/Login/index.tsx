import { useNavigate } from 'react-router-dom';
import { Button, Input, useTheme } from '@scaleiq/scaleiq-ui';
import signInImg from '@scaleiq/scaleiq-ui/dist/assets/animatedIcons/login1.gif';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer} data-dark-mode={darkMode}>
        <h5>Sign In</h5>
        <img src={signInImg} alt="Sign In" className={styles.loginImg} />
        <form className={styles.form}>
          <div>
            <Input type="text" label="Username" onChange={() => {}} />
          </div>
          <div>
            <Input type="password" label="Password" onChange={() => {}} />
          </div>
          <p className={styles.forgotPassword}>
            <a href="/forgot-password">
              <small>Forgot your password?</small>
            </a>
          </p>
          <Button onClick={() => navigate('/home')} block={true} size="m">
            Sign In
          </Button>
          <small className={styles.signUp}>
            <a href="/sign-up" className={styles.signUpLink}>
              <small> Don't have an account? &nbsp; Sign Up</small>
            </a>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
