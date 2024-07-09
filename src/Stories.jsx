import React from 'react'
import InputBox from './InputBox'
import Post from './Post'
import postdata from './postdata'
import Indistory from './IndiStory'
import Storydata from './StoryData';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { IconButton } from '@mui/material'
import CreateYourStory from './CreateYourStory';




import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';







const Stories = () => {


 let usersNewPost =  JSON.parse(localStorage.getItem("mypost"))

 let usersNewStory = JSON.parse(localStorage.getItem("newStory"))
 
  // const [i, setmyIndex] =  React.useState(0)

  // let x = i + 3

  // let renderedStorydata = Storydata.slice(i, x)  

  // const handleForwardbutton = () => {
  //  if (x < Storydata.length ) {
  //   setmyIndex(prev => prev + 1)
  //  }

  // }

  // const handleBackbutton = () => {
  //   if (i) {
  //     setmyIndex(prev => prev - 1)
  //   }

  // } 

  
  
  
  return (
    
   <div className='w-2/5 mt-20'  > 



{/* <div className='flex'>
  <CreateYourStory />
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
</div> */}


  {/* <div className='flex justify-between'> 
  <IconButton sx={{backgroundColor: 'gainsboro'}} >   <ArrowBackIosNewOutlinedIcon  className='text-pink-400 ' onClick={handleBackbutton} /> </IconButton> 

    <IconButton sx={{backgroundColor: 'gainsboro'}}>  <ArrowForwardIosOutlinedIcon className='text-pink-400 ' onClick={handleForwardbutton} />   </IconButton>
  

 </div> */}

<Swiper
        className="h-64  "
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={4}
        navigation 
        
        scrollbar={{ draggable: true }}
        
      >
      
    
       <SwiperSlide >

        {/* <CreateYourStory /> */}
   {/* {  usersNewStory && <Indistory key = {usersNewStory.id} 
          text= {usersNewStory.text}
          userId = {usersNewStory.userId}
          id = {usersNewStory.id}   
          src = {usersNewStory.src} 
          imagesrc = {usersNewStory.imagesrc} 
          url = {usersNewStory.url}
          name = {usersNewStory.name} />} */}
        
          {usersNewStory ?   <Indistory key = {usersNewStory.id} 
            text= {usersNewStory.text}
            userId = {usersNewStory.userId}
            id = {usersNewStory.id}  
            src = {usersNewStory.src} 
            imagesrc = {usersNewStory.imagesrc} 
            url = {usersNewStory.url}
            name = {usersNewStory.name}/>  :  <CreateYourStory /> }
        
        </SwiperSlide>


        {Storydata.map(item => 
          <SwiperSlide >
            <Indistory  key = {item.id} 
            text= {item.text}
            userId = {item.userId}
            id = {item.id}  
            src = {item.src} 
            imagesrc = {item.imagesrc} 
            url = {item.url}
            name = {item.name}/>
          </SwiperSlide>)}        
      
      </Swiper>   

    
    <InputBox />

  {usersNewPost && 
     <Post 
     key = {usersNewPost.id}
     userId = {usersNewPost.userId}
     src= {usersNewPost.src}
     name = {usersNewPost.name}
     time = {usersNewPost.time}
     text = {usersNewPost.text}
     imagesrc = {usersNewPost.imagesrc}
     likes = {usersNewPost.likes} />}

   
    

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
