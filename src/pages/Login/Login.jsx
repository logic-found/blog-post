import React from 'react'
import './Login.scss'
import { useState } from 'react'

export default function Login() {
  const [inputValue, setInputValue] = useState({
    username:'',
    password:''
  })
  function changeHandler(e){
    const {name,value} = e.target
    setInputValue({
      ...inputValue,
      [name]:value
    })
    console.log(name,value)
  }
  return (
    <div className='login-div'>
    <h1>Login</h1> 

    <form action="" className="login-form">

      <div className="form-field">
        <label htmlFor="username" className='label'>Username</label><br />
        <input value={inputValue.username} onChange={changeHandler} type="username" name="username" id="username" className='input-field' placeholder='Enter your email'/>
      </div>
      <div className="form-field">
          <label htmlFor="password" className='label'>Password</label><br />
          <input value={inputValue.password} onChange={changeHandler} type="text" name="password" id="password" className='input-field' placeholder='Enter your password'/>
        </div>
      <button className='submit-btn'>Submit</button>
    </form>

    <button className='login-btn'  onClick={()=> window.open('/register')}>Register</button>
  </div>

  )
}
