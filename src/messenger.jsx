import { Avatar } from '@mui/material'
import React from 'react'
import { messageData } from './MessageData'




const Messenger = () => {





  return (
    <div className='notifications'>
       <div className='p-5'> 
       <h1 className='font-bold text-xl my-2'> Messages  </h1>

      {messageData.map(item => 
           <div className='flex'>
           <Avatar className='my-4' src={item.src} />
           <div className='m-2'>
             <p className='font-bold'> {item.username} </p>
             <p className='text-slate-700 text-sm'> {item.message} </p>
           </div>
          </div>
      )}
       

       </div>
      
    </div>
  )
}

export default Messenger
