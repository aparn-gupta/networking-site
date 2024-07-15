import { Avatar } from '@mui/material'
import React, { useContext, useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { useridContext } from './MainComponent';
import { userData } from './userComponents/userData';

import { emotionformContext } from './Feelingform';





const EmotionPostform = (props) => {

   

    const [formWithEmotionStyling, setFormWithEmotionStyling] = useContext(emotionformContext)

    const [userText, setUsertext]  = useState("")
    const [userImage, setUserImage]  = useState("")
   
    
    


   
    const handleClick = () => {
      
      setFormWithEmotionStyling("false" )      
          

    }

   


    const handleChange = (e) => {
      setUsertext(e.target.value)
    }

    const handleFileSelect = (e) => {
      const userPhoto = e.target.files[0]

      let reader = new FileReader()
      reader.onload =  (e) => {setUserImage(e.target.result)

            }
      reader.readAsDataURL(userPhoto)

    }

    const [selfId, setSelfId] = React.useContext(useridContext)
    let currentUser = {} 
  
  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each


    }
  }
 

  let currentUserPosts = []

let now = new Date()



  let feelingPost = {
    id: 5555,
    feeling: props.feeling,
    userId: currentUser.userId,
    src: currentUser.pfpSrc,
    name: currentUser.username,
    time: now.toUTCString(),
    text: userText,
    imagesrc: userImage,
    likes: 0


  }


  const handleSubmit = () => { 
    
    localStorage.setItem(localStorage.setItem("mypost", JSON.stringify(feelingPost)))

   
      
  }   
   
   
 


  return (
    <div className='emoform' >


       
       
        

      <div >
      <div className=' flex justify-between mb-4 my-2'>    <KeyboardBackspaceIcon onClick={handleClick} className='text-white'/>   <h1 className='font-bold text-lg mr-40'>  Create New Post </h1>   </div>
 
 <div className='flex'>   <Avatar src= {currentUser.pfpSrc}  />   <div className='m-2 text-lg'>  {currentUser.username}  </div> 
 <div className='flex justify-center mt-2 text-lg'> is feeling <p className='text-orange-400 font-bold mx-0.5 capitalize'>   {props.feeling} </p>today! </div> </div>


 
  <div className=''>
      <form onSubmit={handleSubmit}> 
     <div className='flex justify-center'>  <input className=  'border-slate-600 border p-2 m-5 h-44 w-96 ' placeholder="What's on your mind?"  value={userText}  onChange={handleChange} />    </div>
      <div> <input type='file' className='m-1 justify-center' onChange={handleFileSelect} />  </div>
      <button type= "submit"  className='bg-pink-900 w-28 h-8  border border-red-500  text-white m-1' > Post   </button> 
      </form> 
   </div>
      
      </div>
      
       
     </div>
   
  )
}

export default EmotionPostform
