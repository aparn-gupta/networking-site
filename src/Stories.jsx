import React from 'react'
import { Avatar } from '@mui/material'
import InputBox from './InputBox'
import Post from './Post'
import postdata from './postdata'
import ReactPlayer from "react-player";
import Indistory from './IndiStory'
import Storydata from './StoryData';




const Stories = () => {

  
  return (
    
   <div className='w-2/5 bg-slate-200  '> 

   <div  className=' flex justify-between'> 
  { Storydata.map(item => 
  <Indistory src = {item.src} 
   imagesrc = {item.imagesrc} 
   url = {item.url}
   name = {item.name}/>)}  
   
   </div>  
    
    <InputBox />

   { postdata.map(item => 
      <Post 
      src = {item.src}
    
      name = {item.name}
      time = {item.time}
      text = {item.text}
      imagesrc = {item.imagesrc}
      likes = {item.likes}
      />)}


{/* <Post 
      src = {postdata[1].src}
    
      name = {postdata[1].name}
      time = {postdata[1].time}
      text = {postdata[1].text}
      imagesrc = {postdata[1].imagesrc}
      likes = {postdata[1].likes}
      /> 
       */}




   </div>
  )
}

export default Stories
