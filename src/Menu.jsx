import React from 'react'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import HistoryIcon from '@mui/icons-material/History';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import EventIcon from '@mui/icons-material/Event';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Menu = () => {
  return (
    <div className='menu'>
    <div className=''> 
    <h1 className='font-bold text-xl my-2 mb-3'> Menu  </h1>

  <div className=''>
  <div className='flex mb-1 hover:bg-slate-100 w-40 p-2.5'>
   <DynamicFeedIcon sx={{width: "2rem", height: "2rem"}} className='text-pink-700 '/> <p className='ml-4 font-semibold'>Post </p>
   </div>

   <div className='flex mb-1 hover:bg-slate-100 w-40 p-2.5'>
   <HistoryIcon sx={{width: "2rem", height: "2rem"}} className='text-pink-700 '/> <p className='ml-4 font-semibold'> Story </p>
   </div>

   <div className='flex mb-1 hover:bg-slate-100 w-40 p-2.5'>
   <GroupWorkIcon sx={{width: "2rem", height: "2rem"}} className='text-pink-700 '/> <p className='ml-4 font-semibold'> Reels </p>
   </div>

   <div className='flex mb-1 hover:bg-slate-100 w-40 p-2.5'>
   <EventIcon sx={{width: "2rem", height: "2rem"}} className='text-pink-700 '/> <p className='ml-4 font-semibold'> Life Event </p>
   </div>

   <div className='flex mb-1 hover:bg-slate-100 w-40 p-2.5'>
   <FindInPageIcon sx={{width: "2rem", height: "2rem"}} className='text-pink-700 '/> <p className='ml-4 font-semibold'> Page </p>
   </div>

   <div className='flex mb-1 hover:bg-slate-100 w-40 p-2.5'>
   <CampaignIcon sx={{width: "2rem", height: "2rem"}} className='text-pink-700 '/> <p className='ml-4 font-semibold'> Ad </p>
   </div>

   <div className='flex mb-1 hover:bg-slate-100 w-40 p-2.5'>
   <LocalMallIcon sx={{width: "2rem", height: "2rem"}} className='text-pink-700 '/> <p className='ml-4 font-semibold'>Marketplace </p>
   </div>





  </div>

  


    </div>
   
 </div>
  )
}

export default Menu
