import styles from '../styles/Login.module.css'

function Login() {
  return (
    <div className={styles.loginbox}>
      <div className={styles.left}>
      <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <input type="submit" name="signup_submit" value="Submit"/>
        <p>Not a user? <a href='/signup' class="create">Create Account</a></p>
      </div>
      <div>
      </div>
      <div className={styles.right}>
        <img src="/logo_not_filled.png" />
      </div>
    </div>
  )
}
export default Login;