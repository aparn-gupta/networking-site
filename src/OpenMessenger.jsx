import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { OpenMessengerContext } from './messenger';

const OpenMessenger = (props) => {

    const [userData, setUserData] = useState([])
    const [userMessage, setUserMessage] = useState("")
    const [showUserMessage, setShowUserMessage] = useState({display: "none"})


    const [meseengerOpened, setMessengerOpened] = useContext(OpenMessengerContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowUserMessage({display : "block"})
        setUserMessage(userData)
        setUserData([])
       

    }

    const handleChange = (e) => {
        setUserData(e.target.value)

    }

    const handleClick = () => {
      setMessengerOpened(prev => !prev)

    }



  return (
    <div className='openmessenger'>
      <div className='relative'> <CloseIcon className='absolute right-0' onClick={handleClick} />  </div>

       <div className='flex justify-center px-4 mt-8'>
     
      <Avatar src= {props.src}/>
             
       </div>
       <div className='flex justify-center'>
       <p className='ml-2 mt-1 font-bold'> {props.username}  </p>  
       </div>
      

       {/* <div> {userinput.value}  </div> */}

       <div>
       <p  className='mt-5 bg-purple-500 rounded-3xl py-3 px-4 leading-tight text-sm'> {props.message}  </p>   
       <div style = {showUserMessage} > <p  className='mt-5 bg-slate-500 rounded-3xl py-3 px-4 leading-tight text-sm'> {userMessage}   </p>  </div>  
     
     <form onSubmit={handleSubmit} >
      
      <div className='flex justify-center'>
     <input type='text' className='mt-8 w-48 h-16 px-3 ml-8' placeholder='Write message' onChange={handleChange} value = {userData} />
     <button type='submit'> <SendIcon className='mt-8 text-purple-500 ml-2'/> </button>
       </div>
        
     
    
     </form>
       </div>


      
    </div>
  )
}

export default OpenMessenger
