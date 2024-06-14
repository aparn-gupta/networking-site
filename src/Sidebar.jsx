import React, { useContext } from 'react'
import SidebarRow from './SidebarRow'
import { Avatar } from '@mui/material'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedIcon from '@mui/icons-material/Feed';
import FlagIcon from '@mui/icons-material/Flag';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Link } from 'react-router-dom';

import { useridContext } from './MainComponent';
import { userData } from './userComponents/userData';






const Sidebar = () => {

  const [selfId, setSelfId] = React.useContext(useridContext)
 

  let currentUser = {}
 
  
  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each


    }
  }

 






  return (
    <div className='w-1/3 mt-14 fixed mr-96'>

       <Link to = {`/users/${selfId}`} >  <SidebarRow  photo =  {<Avatar src={currentUser.pfpSrc } />} title = {currentUser.username}/> </Link>
        <SidebarRow  icon =  {<Diversity3Icon  className='text-pink-600'/>}  title = "Friends"/>
        <SidebarRow  icon =  {<WatchLaterIcon  className='text-pink-600'/>}  title = "Memories"  />
        <SidebarRow  icon = {<BookmarksIcon  className='text-pink-600'  /> } title = "Saved" />
        <SidebarRow  icon = {< LocalActivityIcon  className='text-pink-600'/> } title = "Events" />
        <SidebarRow  icon = { <BarChartIcon  className='text-pink-600'/> } title = "Ads" />
        <SidebarRow  icon = { <FeedIcon  className='text-pink-600'/>  } title = "Feeds" />
        <SidebarRow  icon = { <FlagIcon  className='text-pink-600'/> } title = "Pages" />   
        <SidebarRow  icon = { <ExpandCircleDownIcon  className='text-pink-600'/> } title = "See More" />   

      
    </div>
  )
}

export default Sidebar
