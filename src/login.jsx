import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen pt-20 relative'>
        <div className='absolute inset-1/2 translate-x-1/2 translate-y-1/2'>
        <label htmlFor='username' > Username </label>
        <input className='w-60 h-8 border-2 border-slate-500' id = 'username' type='text' />
        <br/>
        <label htmlFor='password'>Password </label>
        <input className='w-60 h-8 border-2 border-slate-500' id='password' type='password'/>
        </div>
      
    </div>
  )
}

export default Login
