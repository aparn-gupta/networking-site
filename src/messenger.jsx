import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import { messageData } from './MessageData'
import OpenMessenger from './OpenMessenger'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { showMessengerContext } from './Navbar'



export const OpenMessengerContext = React.createContext()


const Messenger = () => {

  const [meseengerOpened, setMessengerOpened] = useState(false)
  const [openMessengerData, setOpenMessengerData] = useState({})
  const [showMessenger, setShowMessenger] = useContext(showMessengerContext)

  

  const handleClick = (e) => {
    setMessengerOpened(prev => !prev)
    let myId = parseInt(e.target.id)
    console.log(myId)
    for (let each of messageData) {
      if (each.id === myId) {
        setOpenMessengerData(each)
  
      }
    }

  }

  const handleCloseButtonClick = () => {
    setShowMessenger(prev => !prev)

  }



 




  const styling =  meseengerOpened ? {display : "block"} : {display :"none"}







  return (
    <OpenMessengerContext.Provider value= {[meseengerOpened, setMessengerOpened]}> 
    <div className='notifications'>
      <div className=''>  <div style = {styling} >  <OpenMessenger src = {openMessengerData.src} username = {openMessengerData.username}  message = {openMessengerData.message}  />  </div> </div>

    
       <div className='p-5'> 
       <div className='flex justify-between'> <h1 className='font-bold text-xl my-2'> Messages  </h1>  <CloseIcon  onClick = {handleCloseButtonClick} /> </div>

      {messageData.map(item => 
           <div id={item.id} className='flex hover:bg-slate-100' onClick={handleClick} >
           <Avatar id={item.id} className='my-4' src={item.src} />
           <div id={item.id} className='m-2'>
             <p id={item.id} className='font-bold'> {item.username} </p>
             <p id={item.id} className='text-slate-700 text-sm'> {item.message} </p>
            
           </div>
          </div>
      )}
       

       </div>
      
    </div>
    </OpenMessengerContext.Provider>
  )
}

export default Messenger
