import React, { useState } from 'react'
import '../../styles/register.css'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className='registerBigContainer'>
        <form className='registerForm'>
          <div className="commonInputContainer">
            <label className='commonLabelClass' htmlFor='userEmail'>Email : </label>
            <input className='commonInputClass' type="email" name="" id="userEmail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <br />
          <div className="commonInputContainer">
            <label className='commonLabelClass' htmlFor="userPassword">Password : </label>
            <input className='commonInputClass' type="password" name="" id="userPassword" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <br />
          <div className="submitContainer">
            <button className='btn btn-primary' type="submit">Submit</button>
            <Link to={'/register'}>Not a user | SignUp</Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login
