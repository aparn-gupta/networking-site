import React from 'react'
import { userData } from './userComponents/userData'
import { useState } from 'react'

const Login = () => {

  const [usernameInput, setUsernameInput] = useState("")
  const [userpassword, setUserPassword] = useState("")
  const [passwordmatchMessage, setPasswordmatchMessage] = useState("")
  const [formStyle, setformStyle] = useState({display : "block"})

  let reqdUser = {}

  const handleSubmit = (e) => {
    e.preventDefault()


    for (let each of userData) {
      if (each.username === usernameInput) {
        reqdUser = each
      }
     
    }

    if (userpassword != reqdUser.password) {
      setPasswordmatchMessage("Incorrect credentials")
    }
    else if (userpassword === reqdUser.password) {
      setformStyle({display : "none"})
    }


  }





  return (
 


   <div style={formStyle}>
   <div className='screenbox'>
    <div className='loginbox'>
       <form >
       
        <label htmlFor='username' > Username </label>
        <input className='w-60 h-8 border-2 p-1 border-slate-500 mb-4' name='username' id = 'username' type='text' value={usernameInput} onChange={(e) => setUsernameInput(e.target.value) }  />
        <br/>
        <label htmlFor='password'>Password </label>
        <input className='w-60 h-8 border-2 p-1 border-slate-500' name= 'password' id='password' type='password' value={userpassword} onChange={(e) => setUserPassword(e.target.value) }  />
       <div className=''>  <button  onClick={handleSubmit}  className='bg-pink-700 w-20 p-0.5 h-8 text-white border-2 border-pink-900 mt-6'> Submit </button> </div>
       <div className='text-red-500 w-40 mt-3'> {passwordmatchMessage} </div>    
       </form>      
    </div>
   </div>


  </div>
  )
}

export default Login
