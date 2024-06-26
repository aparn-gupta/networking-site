import React from 'react'
import InputBox from './InputBox'
import Post from './Post'
import postdata from './postdata'
import Indistory from './IndiStory'
import Storydata from './StoryData';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { IconButton } from '@mui/material'





const Stories = () => {

  const [i, setmyIndex] =  React.useState(0)

  let x = i + 4

  let renderedStorydata = Storydata.slice(i, x)  

  const handleForwardbutton = () => {
   if (x < Storydata.length ) {
    setmyIndex(prev => prev + 1)
   }

  }

  const handleBackbutton = () => {
    if (i) {
      setmyIndex(prev => prev - 1)
    }

  }

  
  
  
  return (
    
   <div className='w-2/5 mt-20'  > 



<div className=''>
<div  className='flex  '>   

{renderedStorydata.map(item => 
<Indistory  key = {item.id} 
  userId = {item.userId}
  id = {item.id}  
  src = {item.src} 
  imagesrc = {item.imagesrc} 
  url = {item.url}
  name = {item.name}/>)}     
</div> 
</div>


  <div className='flex justify-between'> 
  <IconButton sx={{backgroundColor: 'gainsboro'}} >   <ArrowBackIosNewOutlinedIcon  className='text-pink-400 ' onClick={handleBackbutton} /> </IconButton> 

    <IconButton sx={{backgroundColor: 'gainsboro'}}>  <ArrowForwardIosOutlinedIcon className='text-pink-400 ' onClick={handleForwardbutton} />   </IconButton>
  

 </div>

   

    
    <InputBox />

   { postdata.map(item => 
      <Post key = {item.id}
      userId = {item.userId}
      src = {item.src}    
      name = {item.name}
      time = {item.time}
      text = {item.text}
      imagesrc = {item.imagesrc}
      likes = {item.likes}
      />)}

    


   </div>
  )
}

export default Stories
