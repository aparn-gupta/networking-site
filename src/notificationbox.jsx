import React from 'react'
import { notificationData } from './notificationData'
import { Avatar } from '@mui/material'

const Notificationbox = () => {
  return (
    <div className='notifications'>
       <div className='p-5'> 
       <h1 className='font-bold text-xl mt-2 mb-4'> Notifications  </h1>

       {notificationData.map(item => <div className='flex mb-2 hover:bg-slate-100 py-1'>
        <Avatar className='mr-3' src= {item.src}/> <p className='mt-2' > {item.notification} </p>

        </div>)}


       </div>
      
    </div>
  )
}

export default Notificationbox
