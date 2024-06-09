import React from 'react'
import Storydata from './StoryData'
import ReactPlayer from "react-player";
import { Avatar } from '@mui/material';
import Indistory from './IndiStory';
import { useParams } from 'react-router-dom';
// import { IdContext } from "./IndiStory";
import { Link } from 'react-router-dom';


const Storypage = () => {


  let myId = useParams()
 
  // let myId = JSON.parse(localStorage.getItem("myId"))
  let reqdStory = {}


 for (let each of Storydata) {
  if (each.id === parseInt(myId.id)) {
    reqdStory = each
  }

 }  


  return (
    <div className='bg-green-900 pt-16 '>
        <div className='h-screen flex justify-center '> 
      
       <div  className=' flex justify-between relative  w-1/3 h-176  '>
       <div className='absolute top-5 left-5 flex'><Link to= "/users/:userid"> <div className='flex'>  <Avatar className=' ring-4 ring-pink-600 ' src= {reqdStory.src} /> <p className='  text-white font-bold mx-4  text-lg' > {reqdStory.name}  </p> </div> </Link></div>  
         {reqdStory.imagesrc &&  <img  className='w-full h-160 ' src= {reqdStory.imagesrc} /> }   {reqdStory.url &&  <ReactPlayer  width="400px" height="590px" url= {reqdStory.url}/>}
        
         </div> 
        
        
         </div>
      
    </div>
  )
}

export default Storypage
