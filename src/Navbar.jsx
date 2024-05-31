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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';



const Navbar = () => {
  return (
    <div className='p-4 flex justify-between shadow-md bg-white'>
      <div className='flex justify-between'> 
         <Link to="/" > <img className='h-12 w-12 rounded-full' src='https://blog.spoongraphics.co.uk/wp-content/uploads/2011/02/Untitled-1.jpg' />  </Link>
         <input className='bg-slate-100 rounded-3xl h-10 p-3 mx-3' type='text' placeholder='Search InterAct'/> 
      </div>        
         
      <div className='text-slate-500 flex justify-between pt-4 w-1/3'> 
      <div className=' flex justify-center   '> <NavLink to='/'  > <HomeOutlinedIcon sx = {{fontSize: 35}}  />      </NavLink>  </div>
      <div  className='flex justify-center  '>  <NavLink to='/groups' >  <GroupsOutlinedIcon sx = {{fontSize: 35}} />  </NavLink> </div>
      <div  className='flex justify-center '>    <NavLink to='/videos'>  <OndemandVideoOutlinedIcon sx = {{fontSize: 28}}  />  </NavLink>  </div>
      <div  className='flex justify-center  '>  <NavLink to='/gaming'>  <VideogameAssetOutlinedIcon sx = {{fontSize: 35}}  />  </NavLink>  </div>
      <div  className='flex justify-center  '>  <NavLink to='/market'>  <StorefrontOutlinedIcon sx = {{fontSize: 30}}  />   </NavLink>     </div>



      
     
    
     
     
      
      </div>


      <div className='flex justify-between'>
        <IconButton className='h-14 w-14' >  <MessageIcon sx = {{fontSize: 30}}  className='text-black'/>  </IconButton>
        <IconButton className='h-14 w-14'>  <NotificationsIcon sx = {{fontSize: 30}} className='text-black'  />  </IconButton>
        <IconButton className='h-14 w-14'>  <MenuIcon sx = {{fontSize: 30}} className='text-black' />  </IconButton>
        <IconButton className='h-14 w-14'>  <Avatar src='https://i.pinimg.com/originals/a4/60/14/a46014e6b16f2b2b2d3c4cec127711ec.jpg'  />  </IconButton>
      </div>
         

          

       
      
      
        
      
    </div>
  )
}

export default Navbar
