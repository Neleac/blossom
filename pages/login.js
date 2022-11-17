import styles from '../styles/Login.module.css'

function Login() {
  return (
    <div>
      <div className={styles.column1}>
        <img src='/logo_not_filled_2.png' />
      </div>
      <div className={styles.column2}>
          <div className={styles.authentication}>
            <h2>Login</h2>
            <form>
              <p>
                <input type="text" placeholder="Username" required></input>
              </p>
              <p>
                <input type="password" placeholder="Password" required></input>
              </p>
              <p>
                <input type="submit" value="Login"></input>
              </p>
            </form>
            <div type="create">
              <p>Not a member? <a href="/register">Create Account</a></p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Login;