import Image from 'next/image'
import Link from 'next/link';

import styles from '../styles/Login.module.css'


function Login() {
  return (
    <div className={styles.loginbox}>
      <div className={styles.left}>
      <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <a href='\home'>
          <input type="submit" name="signup_submit" value="Submit"/>
        </a>
        <p>Not a user? <Link href='/signup' class="create">Create Account</Link></p>
      </div>
      <div>
      </div>
      <div className={styles.right}>
        <Image src="/name.png" alt="name" width={100} height={100}></Image>
      </div>
    </div>
  )
}
export default Login;