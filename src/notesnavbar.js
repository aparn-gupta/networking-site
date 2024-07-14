import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

import { Avatar } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import { IconButton } from '@mui/material'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';

import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';


import Messenger from './messenger';
import Notificationbox from './notificationbox';
import Menu from './Menu';
import { useState, useContext } from 'react';
import { useridContext } from './MainComponent';

import { userData } from './userComponents/userData';


export const showMessengerContext = React.createContext()




const Navbar = () => {


  const [selfId, setSelfId] = useContext(useridContext)
  

  const [showMessenger, setShowMessenger] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const [showLogOutButton, setShowLogOutButton] = useState(false)

  const notificationbox = showNotification ?  <Notificationbox/>  : null
  const messengerbox = showMessenger ?  <Messenger/>  : null
  const MenuBox = showMenu ?  <Menu/>  : null


 


  const handleClickforNotification = () =>  {
    
    setShowNotification(prev => !prev)
    setShowMessenger(false)
    setShowMenu(false)
  }

  const handleClickforMessenger = () =>  {
    setShowMessenger(prev => !prev)
    setShowNotification(false)
    setShowMenu(false)
    
  }

  const handleClickforMenu = () =>  {
    setShowMenu(prev => !prev)
    setShowNotification(false)
    setShowMessenger(false)
    
  }

  const showLogOut = () => {
    setShowLogOutButton(prev => !prev)

   
  }

  const logOut = () => {
    localStorage.removeItem("userloggedin")
    localStorage.removeItem("LoggedUserId")
    window.location.reload()

  }

  const theLogOutButton = showLogOutButton ? <button onClick={logOut} className='bg-white border-2 border-black font-semibold p-2'> Log Out </button> : <div></div>



  let currentUser = {}
 
  
    for (let each of userData) {
      if (each.userId === parseInt(selfId)) {
        currentUser = each
  
  
      }
    }




  return (

    <showMessengerContext.Provider value={[showMessenger, setShowMessenger]}> 
    <div className='px-2 py-1 flex justify-between shadow-lg bg-white h-16 relative'>
      <div className='flex justify-between mr-32'> 
         <Link to="/" > <img className='h-12 w-12 rounded-full' src='https://blog.spoongraphics.co.uk/wp-content/uploads/2011/02/Untitled-1.jpg' />  </Link>
         <input className='bg-slate-100 rounded-3xl h-10 p-3 mx-3 my-1.5 w-44' type='text' placeholder='Search InterAct'/> 
      </div>        
         
      <div className='text-slate-500 flex mr-24'> 
      <div className=' flex justify-center hover:bg-slate-100 px-11 py-1.5'> <NavLink to='/'  > <HomeOutlinedIcon sx = {{fontSize: 35}}  />      </NavLink>  </div>
      <div  className='flex justify-center hover:bg-slate-100 px-11 py-1.5 '>  <NavLink to='/groups' >  <GroupsOutlinedIcon sx = {{fontSize: 35}} />  </NavLink> </div>
      <div  className='flex justify-center hover:bg-slate-100 px-11 py-2'>    <NavLink to='/videos'>  <OndemandVideoOutlinedIcon sx = {{fontSize: 28}}  />  </NavLink>  </div>
      <div  className='flex justify-center hover:bg-slate-100 px-11 py-1.5'>  <NavLink to='/gaming'>  <VideogameAssetOutlinedIcon sx = {{fontSize: 35}}  />  </NavLink>  </div>
      <div  className='flex justify-center hover:bg-slate-100 px-11 py-1.5'>  <NavLink to='/market'>  <StorefrontOutlinedIcon sx = {{fontSize: 30}}  />   </NavLink>     </div>



      
    
    
     
     
      
      </div>
     


      <div className='flex justify-between '>
       
        <IconButton className='h-14 w-14'  sx = {{ backgroundColor: 'gainsboro', marginRight : '0.4rem'}}  onClick={handleClickforMessenger}  >  <MessageIcon    sx = {{fontSize: 25}}  className='text-black'/>  </IconButton>
        
        <IconButton className='h-14 w-14' sx = {{ backgroundColor: 'gainsboro', marginRight : '0.4rem'}} onClick={handleClickforNotification}>  <NotificationsIcon sx = {{fontSize: 25}} className='text-black'  />  </IconButton>
        <IconButton className='h-14 w-14' onClick={handleClickforMenu} sx = {{ backgroundColor: 'gainsboro', marginRight : '0.4rem'}} >  <MenuIcon sx = {{fontSize: 25}} className='text-black' />  </IconButton>
        <IconButton className='h-14 w-14'sx = {{ backgroundColor: 'gainsboro', marginRight : '0.4rem'}}  onClick={showLogOut} >  <Avatar src= {currentUser.pfpSrc}  />  </IconButton>  
        <div className=''> {notificationbox}  </div>
        <div className=''> {messengerbox}  </div>
        <div className=''> {MenuBox}  </div>
        <div className='absolute top-16 right-5'>{theLogOutButton} </div>
      </div>
         

          

       
      
      
        
      
    </div>
    </showMessengerContext.Provider>
  )
}

export default Navbar
