import styles from '../styles/Signup.module.css'

function Register() {
  return (
    <div className={styles.loginbox}>
      <div className={styles.left}>
        <h1>Sign Up</h1>
        <input type="text" name="username" placeholder="First name"/>
        <input type="text" name="username" placeholder="Last name"/>
        <input type="text" name="email" placeholder="E-mail"/>
        <input type="password" name="password" placeholder="Password"/>
        <input type="password" name="password2" placeholder="Confirm password"/>
        <a href='\home'>
          <input type="submit" name="signup_submit" value="Join Blossom"/>
        </a>
      </div>
      <div className={styles.right}>
        <h1>What are some areas in your life you would like to improve?</h1>
          <label class="form-control"><input type="checkbox" name="checkbox" />-- Anxiety</label>
          <label class="form-control"><input type="checkbox" name="checkbox" />-- Focus & Time Management</label>
          <label class="form-control"><input type="checkbox" name="checkbox" />-- Fitness & Diet</label>
          <label class="form-control"><input type="checkbox" name="checkbox" />-- Depression</label>
          <label class="form-control"><input type="checkbox" name="checkbox" />-- Financial Habits</label>
          <label class="form-control"><input type="checkbox" name="checkbox" />-- Substance Abuse</label>
          <label class="form-control"><input type="checkbox" name="checkbox" />-- Communication</label>
      </div>
    </div>
  )
}

export default Register