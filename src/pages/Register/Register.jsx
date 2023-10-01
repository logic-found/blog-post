import React from 'react'
import './Register.scss'
import { useState } from 'react'

export default function Register() {
  const [inputValue, setInputValue] = useState({
    name:'',
    email:'',
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
    <div className='register-div'>
      <h1>REGISTER</h1> 

      <form action="" className="register-form">
        <div className="form-field">
          <label htmlFor="name" className='label'>Name</label><br />
          <input value={inputValue.name} onChange={changeHandler} type="text" name="name" id="name" className='input-field' placeholder='Enter your name'/>
        </div>
        <div className="form-field">
          <label htmlFor="email" className='label'>Email</label><br />
          <input value={inputValue.email} onChange={changeHandler} type="email" name="email" id="email" className='input-field' placeholder='Enter your email'/>
        </div>
        <div className="form-field">
          <label htmlFor="username" className='label'>Username</label><br />
          <input value={inputValue.username} onChange={changeHandler} type="text" name="username" id="username" className='input-field' placeholder='Enter your username'/>
        </div>
        <div className="form-field">
          <label htmlFor="password" className='label'>Password</label><br />
          <input value={inputValue.password} onChange={changeHandler} type="text" name="password" id="password" className='input-field' placeholder='Enter your password'/>
        </div>
        <button className='submit-btn'>Submit</button>
      </form>

      <button className='login-btn' onClick={()=> window.open('/login')}>Login</button>
    </div>
  )
}
