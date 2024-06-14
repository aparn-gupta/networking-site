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
import { useridContext } from './MainComponent';

import { userData } from './userComponents/userData';


export const showMessengerContext = React.createContext()




const Navbar = () => {


  const [selfId, setSelfId] = React.useContext(useridContext)
  

  const [showMessenger, setShowMessenger] = React.useState(false)
  const [showNotification, setShowNotification] = React.useState(false)
  const [showMenu, setShowMenu] = React.useState(false)

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


  let currentUser = {}
 
  
    for (let each of userData) {
      if (each.userId === parseInt(selfId)) {
        currentUser = each
  
  
      }
    }




  return (

    <showMessengerContext.Provider value={[showMessenger, setShowMessenger]}> 
    <div className='p-1 flex justify-between shadow-lg bg-white '>
      <div className='flex justify-between '> 
         <Link to="/" > <img className='h-12 w-12 rounded-full' src='https://blog.spoongraphics.co.uk/wp-content/uploads/2011/02/Untitled-1.jpg' />  </Link>
         <input className='bg-slate-100 rounded-3xl h-10 p-3 mx-3 my-1.5' type='text' placeholder='Search InterAct'/> 
      </div>        
         
      <div className='text-slate-500 flex justify-between pt-4 w-1/3'> 
      <div className=' flex justify-center   '> <NavLink to='/'  > <HomeOutlinedIcon sx = {{fontSize: 35}}  />      </NavLink>  </div>
      <div  className='flex justify-center  '>  <NavLink to='/groups' >  <GroupsOutlinedIcon sx = {{fontSize: 35}} />  </NavLink> </div>
      <div  className='flex justify-center '>    <NavLink to='/videos'>  <OndemandVideoOutlinedIcon sx = {{fontSize: 28}}  />  </NavLink>  </div>
      <div  className='flex justify-center  '>  <NavLink to='/gaming'>  <VideogameAssetOutlinedIcon sx = {{fontSize: 35}}  />  </NavLink>  </div>
      <div  className='flex justify-center  '>  <NavLink to='/market'>  <StorefrontOutlinedIcon sx = {{fontSize: 30}}  />   </NavLink>     </div>



      
    
    
     
     
      
      </div>
     


      <div className='flex justify-between '>
       
        <IconButton className='h-14 w-14'  sx = {{ backgroundColor: 'gainsboro', marginRight : '0.4rem'}}  onClick={handleClickforMessenger}  >  <MessageIcon    sx = {{fontSize: 25}}  className='text-black'/>  </IconButton>
        
        <IconButton className='h-14 w-14' sx = {{ backgroundColor: 'gainsboro', marginRight : '0.4rem'}} onClick={handleClickforNotification}>  <NotificationsIcon sx = {{fontSize: 25}} className='text-black'  />  </IconButton>
        <IconButton className='h-14 w-14' onClick={handleClickforMenu} sx = {{ backgroundColor: 'gainsboro', marginRight : '0.4rem'}} >  <MenuIcon sx = {{fontSize: 25}} className='text-black' />  </IconButton>
       <Link to = {`/users/${selfId}`}>  <IconButton className='h-14 w-14'sx = {{ backgroundColor: 'gainsboro', marginRight : '0.4rem'}} >  <Avatar src= {currentUser.pfpSrc}  />  </IconButton>  </Link>
        <div className=''> {notificationbox}  </div>
        <div className=''> {messengerbox}  </div>
        <div className=''> {MenuBox}  </div>
      </div>
         

          

       
      
      
        
      
    </div>
    </showMessengerContext.Provider>
  )
}

export default Navbar
